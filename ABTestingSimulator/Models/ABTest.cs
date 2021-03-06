using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ABTestingSimulator.Models
{
    public enum TestState
    {
        Running, Succeded, Failed
    }
    public class ABTest
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int Impact { get; set; }

        public int TotalProfit { get; set; }

        public TestState TestState { get; set; }

        public bool IsATest { get; set; }

        public int UserAmount { get; set; }
    }
}
