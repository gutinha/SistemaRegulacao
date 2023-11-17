using AspNetCoreHero.ToastNotification.Abstractions;
using Microsoft.AspNetCore.Mvc;
using SistemaRegulacao.Models;
using System.Diagnostics;

namespace SistemaRegulacao.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public INotyfService _notifyService { get; }
        public dbContext db = new dbContext();
        public HomeController(ILogger<HomeController> logger, INotyfService notifyService)
        {
            _logger = logger;
            _notifyService = notifyService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Login")]
        public IActionResult Login(string email, string password)
        {
            var user = db.Users.Where(x => x.Email == email && x.Password == Util.hash(email+password) && x.Active == true).FirstOrDefault();
            if (user != null)
            {
                HttpContext.Session.SetString("idUser", user.Id.ToString());
                _notifyService.Success("Login realizado com sucesso!");
                return RedirectToAction("Index", "Home");
            }
            else
            {
                _notifyService.Error("Usuário ou senha inválidos");
                return View();
            }
            
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}