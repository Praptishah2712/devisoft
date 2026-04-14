using Microsoft.AspNetCore.Mvc;
using sample1.Models;

namespace sample1.Controllers
{
    public class AccountController : Controller
    {
        private readonly SampledbContext _context;

        public AccountController(SampledbContext context)
        {
            _context = context; // ✅ FIXED
        }

        // 🔥 LOGIN METHOD FOR REACT
        [HttpPost]
        public JsonResult Login([FromBody] LoginModel model)
        {
            // TEMP LOGIN (you can connect DB later)
            if (model.Username == "admin" && model.Password == "123")
            {
                return Json("Success");
            }

            return Json("Fail");
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}