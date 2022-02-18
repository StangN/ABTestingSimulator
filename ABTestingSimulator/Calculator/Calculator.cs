using ABTestingSimulator.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MathNet.Numerics.Distributions;

namespace ABTestingSimulator.Calculator
{
    public class Calculator
    {
        public readonly CalculatorContext _context = new();
        public async Task<List<ABTest>> SimulateABTests(int users, int impact, int testAmount, double convertion, double targetCredebility, int percentToPass)
        {
            _context.ABTests.RemoveRange(_context.ABTests);

            var result = new List<ABTest>();
            for(int i = 0; i < testAmount; i++)
            {
                await LaunchABTests(impact);
                await UpdateOngoingTests(users, convertion, targetCredebility, percentToPass);
                result.AddRange(GetTestResults());
            }
            
            
            await _context.SaveChangesAsync();
            return result;
            
        }

        public async Task UpdateOngoingTests(int users, double convertion, double targetCredebility, int percentToPass)
        {
            var abTests = await _context.ABTests.Where(ab => ab.TestState == TestState.Running).ToListAsync();
            
            var task = SeedUsers(abTests, users, convertion, targetCredebility, percentToPass);
            task.Wait();
            foreach (ABTest test in abTests)
            {
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
                _context.ABTests.Where(ab => ab.IsATest == false).OrderBy(ab => ab.Id).Last(),
                _context.ABTests.Where(ab => ab.IsATest == true && ab.TestState != 0).OrderBy(ab => ab.Id).Last()
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

        private async Task SeedUsers(List<ABTest> abTests, int amountOfUsers, double convertion, double targetCredebility, int percentToPass)
        {
            var rand = new Random();
            var usersA = new List<DemoModelUser>();
            var usersB = new List<DemoModelUser>();
            var consistency = 0;
            var testA = abTests.First();
            var testB = abTests.Last();

            var threshold = amountOfUsers / 10;

            var totalConversionsA = 0;
            var totalConversionsB = 0;
            for (int x = 0; x < amountOfUsers; x++)
            {
                DemoModelUser userA = GetUser(testA, convertion, rand);
                if (userA.Profit == 10)
                {
                    totalConversionsA++;
                }
                usersA.Add(userA);
                DemoModelUser userB = GetUser(testB, convertion, rand);
                if (userB.Profit == 10)
                {
                    totalConversionsB++;
                }
                usersB.Add(userB);

                if (x == threshold)
                {
                    double pValue = GetPValue(x, totalConversionsA, totalConversionsB);
                    if (pValue < (1 - targetCredebility))
                    {
                        consistency  += 10;
                        testA.UserAmount = x;
                        testB.UserAmount = x;
                        if (consistency >= percentToPass)
                        {
                            break;
                        }
                    }
                    else
                    {
                        consistency = 0;
                    }
                    threshold += amountOfUsers / 10;
                }
                testA.UserAmount = x;
                testB.UserAmount = x;
            }
            await _context.DemoModelUsers.AddRangeAsync(usersA);
            await _context.DemoModelUsers.AddRangeAsync(usersB);
            await _context.SaveChangesAsync();
        }

        private static DemoModelUser GetUser(ABTest abTest, double convertion, Random rand)
        {
            int profit = 0;
            double updatedConversionThreshold = convertion * (1 + ((double)abTest.Impact / 100));
            double warmth = Math.Round(rand.NextDouble(), 3);
            if ((1 - updatedConversionThreshold) <= warmth)
            {
                profit = 10;
                
            }

            var user = new DemoModelUser
            {
                ABTest = abTest,
                Warmth = warmth,
                Profit = profit
            };
            return (user);
        }

        private static double GetPValue(double users, double conversionsA, double conversionsB )
        {
            double crA = conversionsA / users;
            double crB = conversionsB / users;
            double seA = Math.Sqrt((crA * (1 - crA)) / users);
            double seB = Math.Sqrt((crB * (1 - crB)) / users);
            double seDiff = Math.Sqrt(Math.Pow(seA, 2) + Math.Pow(seB, 2));
            double zScore = (crB - crA) / seDiff;
            double pValue = 1 - Normal.CDF(0, 1, zScore);
            if (pValue > 0.5) pValue = 1 - pValue;
            return pValue;
        }
    }
}
