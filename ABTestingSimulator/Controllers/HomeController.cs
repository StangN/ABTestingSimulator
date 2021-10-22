using ABTestingSimulator.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Threading.Tasks;

namespace ABTestingSimulator.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpGet("calculation")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Calculation()
        {
            var calc = new Calculator.Calculator();
            await calc.SimulateABTests();
            return Ok();
        }
        
        public async Task<IActionResult> Index()
        {
            ViewData["calculation_url"] = _configuration.GetValue<string>("CalculatorUrl");
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
