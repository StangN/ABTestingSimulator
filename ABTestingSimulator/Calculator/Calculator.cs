using ABTestingSimulator.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABTestingSimulator.Calculator
{
    public class Calculator
    {
        public readonly CalculatorContext _context = new();
        public async Task SimulateABTests()
        {
            for (int i = 0;i < 366 ;i++)
            {
                if (await _context.ABTests.Where(ab => ab.TestState == TestState.Running).CountAsync() < 2)
                {
                    await LaunchABTests(i);
                    await UpdateOngoingTests(i);
                }
                else
                {
                    await UpdateOngoingTests(i);
                }
            }
        }

        public async Task UpdateOngoingTests(int x)
        {
            var abTests = await _context.ABTests.Where(ab => ab.TestState == TestState.Running).ToListAsync();
            foreach (ABTest i in abTests)
            {
                await SeedUsers(i);
                await CalculateTotalLoss(i);
                if (i.StartDate.AddDays(30) < new DateTime(2021,01,01).AddDays(x))
                {
                    if (await CheckSuccessOfTests(x))
                    {
                        return;
                    }
                }
            }
        }

        private async Task LaunchABTests(int i)
        {
            var rand = new Random();
            var abTest1 = new ABTest
            {
                StartDate = new DateTime(2021, 01, 01).AddDays(i),
                Impact = 0,
                TotalProfit = 0,
                TestState = TestState.Running,
                IsATest = false
            };
            for (var a = 0;a < 4;a++)
            {
                var abTest2 = new ABTest
                {
                    StartDate = new DateTime(2021, 01, 01).AddDays(i),
                    Impact = rand.Next(-20, 20),
                    TotalProfit = 0,
                    TestState = TestState.Running,
                    IsATest = true
                };
                _context.ABTests.Add(abTest2);
            }
            
            _context.ABTests.Add(abTest1);
            
            await _context.SaveChangesAsync();
        }

        private async Task CalculateTotalLoss(ABTest abTest)
        {
            int profit = _context.DemoModelUsers.Where(dmu => dmu.ABTestId == abTest.Id).Select(dmu => dmu.Profit).Sum();
            abTest.TotalProfit = profit;
            await _context.SaveChangesAsync();
        }

        private async Task<bool> CheckSuccessOfTests(int x)
        {
            ABTest initial = _context.ABTests.Where(ab => ab.TestState == TestState.Running && ab.IsATest == false).FirstOrDefault();
            List<ABTest> ongoingTests = await _context.ABTests.Where(ab => ab.TestState == TestState.Running && ab.IsATest == true).ToListAsync();
            foreach (var test in ongoingTests)
            {
                if (test.TotalProfit / initial.TotalProfit > 1.3)
                {
                    test.TestState = TestState.Succeded;
                    test.EndDate = new DateTime(2021, 01, 01).AddDays(x);
                    await _context.SaveChangesAsync();
                    return true;
                }
                else if (test.StartDate.AddDays(60) < new DateTime(2021, 01, 01).AddDays(x))
                {
                    if (test.TotalProfit > initial.TotalProfit)
                    {
                        test.TestState = TestState.Succeded;
                        test.EndDate = new DateTime(2021, 01, 01).AddDays(x);
                    }
                    else
                    {
                        test.TestState = TestState.Failed;
                        test.EndDate = new DateTime(2021, 01, 01).AddDays(x);
                        ongoingTests[1].EndDate = new DateTime(2021, 01, 01).AddDays(x);
                    }
                    await _context.SaveChangesAsync();
                }
            }
            if (!_context.ABTests.Where(ab => ab.TestState == TestState.Running && ab.IsATest == true).Any())
            {
                initial.TestState = TestState.Failed;
                initial.EndDate = new DateTime(2021, 01, 01).AddDays(x);
                await _context.SaveChangesAsync();
                return true;
            }
            
            return false;
        }

        private async Task SeedUsers(ABTest abTest)
        {
            var rand = new Random();
            var users = new List<DemoModelUser>();
            for (int x = 0; x < 300; x++)
            {
                double warmth = Math.Round(rand.NextDouble(),2);
                int profit = 0;
                double updatedWarmth = (warmth * (1 + ((double)abTest.Impact / 100)));
                if (0.5 < updatedWarmth)
                {
                        profit = 10;
                }

                var user = new DemoModelUser
                {
                    ABTest = abTest,
                    Warmth = warmth,
                    Profit = profit
                };
                users.Add(user);
            }
            await _context.DemoModelUsers.AddRangeAsync(users);
            await _context.SaveChangesAsync();
        }
    }
}
