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
        public async Task<List<ABTest>> SimulateABTests(int users, int impact, int testAmount)
        {
            var result = new List<ABTest>();
            for(int i = 0; i < testAmount; i++)
            {
                await LaunchABTests(impact);
                await UpdateOngoingTests(users);
                result.AddRange(GetTestResults());
            }
            
            _context.ABTests.RemoveRange(_context.ABTests);
            await _context.SaveChangesAsync();
            return result;
            
        }

        public async Task UpdateOngoingTests(int users)
        {
            var abTests = await _context.ABTests.Where(ab => ab.TestState == TestState.Running).ToListAsync();
            foreach (ABTest test in abTests)
            {
                var task = SeedUsers(test, users);
                task.Wait();
                CalculateTotalLoss(test);
                if (test.IsATest)
                {
                    await CheckSuccessOfTests();
                }
            }
        }

        public List<ABTest> GetTestResults()
        {
            var result = new List<ABTest>
            {
                _context.ABTests.Where(ab => ab.IsATest == true && ab.TestState != 0).OrderBy(ab => ab.Id).Last(),
                _context.ABTests.Where(ab => ab.IsATest == false).OrderBy(ab => ab.Id).Last()
            };
            return result;
        }


        private async Task LaunchABTests(int impact)
        {
            var rand = new Random();
            var abTest1 = new ABTest
            {
                Impact = 0,
                TotalProfit = 0,
                TestState = TestState.Running,
                IsATest = false
            };

            var abTest2 = new ABTest
            {
                Impact = impact,
                TotalProfit = 0,
                TestState = TestState.Running,
                IsATest = true
            };
            _context.ABTests.Add(abTest1);
            _context.ABTests.Add(abTest2);
            
            await _context.SaveChangesAsync();
        }

        private void CalculateTotalLoss(ABTest abTest)
        {
            int profit = _context.DemoModelUsers.Where(dmu => dmu.ABTestId == abTest.Id).Select(dmu => dmu.Profit).Sum();
            abTest.TotalProfit = profit;
            _context.SaveChanges();
        }

        private async Task CheckSuccessOfTests()
        {
            ABTest initial = _context.ABTests.Where(ab => ab.TestState == TestState.Running && ab.IsATest == false).FirstOrDefault();
            List<ABTest> ongoingTests = await _context.ABTests.Where(ab => ab.TestState == TestState.Running && ab.IsATest == true).ToListAsync();
            foreach (var test in ongoingTests)
            {
                if (test.TotalProfit > initial.TotalProfit)
                {
                    test.TestState = TestState.Succeded;
                    await _context.SaveChangesAsync();
                }
                else
                {
                    test.TestState = TestState.Failed;
                    await _context.SaveChangesAsync();
                }
            }
            initial.TestState = TestState.Succeded;

        }

        private async Task SeedUsers(ABTest abTest, int amountOfUsers)
        {
            var rand = new Random();
            var users = new List<DemoModelUser>();
            for (int x = 0; x < amountOfUsers; x++)
            {
                double warmth = Math.Round(rand.NextDouble(),2);
                int profit = 0;
                double updatedWarmth = warmth * (1 + ((double)abTest.Impact / 100));
                if (0.49 < updatedWarmth)
                {
                    profit = 10;
                }

                var user = new DemoModelUser
                {
                    ABTest = abTest,
                    Warmth = updatedWarmth,
                    Profit = profit
                };
                users.Add(user);
            }
            await _context.DemoModelUsers.AddRangeAsync(users);
            await _context.SaveChangesAsync();
        }
    }
}
