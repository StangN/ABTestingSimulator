using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ABTestingSimulator.Models
{
    public class DemoModelUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public double Warmth { get; set; }

        public int ABTestId { get; set; }

        public ABTest ABTest { get; set; }

        public int Profit { get; set; }
    }
}
