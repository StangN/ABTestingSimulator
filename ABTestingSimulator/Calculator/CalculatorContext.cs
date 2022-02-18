using ABTestingSimulator.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace ABTestingSimulator.Calculator
{
    public class CalculatorContext : DbContext
    {
        public CalculatorContext()
        {
        }
        public DbSet<DemoModelUser> DemoModelUsers { get; set; }

        public DbSet<ABTest> ABTests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DemoModelUser>().HasIndex(du => du.ABTestId);
            modelBuilder.Entity<DemoModelUser>().HasIndex(du => du.Profit);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=CalculatorDb;Integrated Security = True;MultipleActiveResultSets=true");
        }
    }
}
