using AspNetCoreHero.ToastNotification.Abstractions;
using Microsoft.AspNetCore.Mvc;
using SistemaRegulacao.Models;
using SistemaRegulacao.Models.Manager;

namespace SistemaRegulacao.Controllers
{
    public class UserController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public INotyfService _notifyService { get; }
        public dbContext db = new dbContext();
        public UserController(ILogger<HomeController> logger, INotyfService notifyService)
        {
            _logger = logger;
            _notifyService = notifyService;
        }

        public IActionResult Index()
        {
            ViewBag.AllUsers = UserManager.GetAllUsers();
            return View();
        }

        public IActionResult CadastrarUsuario()
        {
            ViewBag.TipoUsuario = UserManager.GetRoles();
            return View();
        }

        public IActionResult ListarUsuariosCadastradosAjax(string search, string sort, string order, int? limit = 10, int? offset = 0)
        {
            using (dbContext db = new dbContext())
            {
                IQueryable<User> users = db.Users.Where(x => x.Active == true);
                int quantidade = limit ?? Constantes.ITENS_POR_PAGINA;
                int pagina = offset ?? 0;

                switch (sort)
                {
                    case "user":
                        if (order.Equals("asc")){
                            users = users.OrderBy(x => x.Name);
                        }
                        else
                        {
                            users = users.OrderByDescending(x => x.Name);
                        }
                        break;
                    case "email":
                        if (order.Equals("asc"))
                        {
                            users = users.OrderBy(x => x.Email);
                        }
                        else
                        {
                            users = users.OrderByDescending(x => x.Email);
                        }
                        break;
                    default:
                        users = users.OrderBy(x => x.Name);
                        break;
                }

                if (!string.IsNullOrEmpty(search))
                {
                    try
                    {
                        int temp;
                        if (int.TryParse(search, out temp))
                        {
                            int number = Convert.ToInt32(search);
                            users = users.Where(x => x.Name.ToLower().Contains(search.ToLower()) || x.Email.ToLower().Contains(search.ToLower()));
                        }
                        else
                        {
                            users = users.Where(x => x.Name.ToLower().Contains(search.ToLower()) || x.Email.ToLower().Contains(search.ToLower()));
                        }
                    } 
                    catch (Exception)
                    {
                        users = users.Where(x => x.Name.ToLower().Contains(search.ToLower()));
                    }
                }
                int totalItens = users.Count();

                var resultados = users.Skip(pagina)
                    .Take(quantidade)
                    .ToList()
                    .Select(x => new
                    {
                        x.Id, x.Name, x.Email
                    })
                    .ToList();
                return Json(new { total = totalItens, rows = resultados }, new System.Text.Json.JsonSerializerOptions());
            }
        }
    }
}
