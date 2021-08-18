using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefDishes.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }
        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.AllChefs = _context.Chefs
                .Include(chef => chef.CreatedDishes)
                .ToList();

            return View();
        }
        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            ViewBag.AllDishes = _context.Chefs
                .Include(chef => chef.CreatedDishes)

                .ToList();

            return View();
        }
        [HttpGet("chefform")]
        public IActionResult ChefForm()
        {
            return View();
        }
        [HttpPost("createchef")]
        public IActionResult CreateChef(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                _context.Chefs.Add(newChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("ChefForm");
        }
        [HttpGet("dishform")]
        public IActionResult DishForm()
        {
            ViewBag.AllChefs = _context.Chefs
            .ToList();

            return View();
        }
        [HttpPost("createdish")]
        public IActionResult CreateDish(Dish dish)
        {
            if(ModelState.IsValid)
            {
                _context.Dishes.Add(dish);
                _context.SaveChanges();
                ViewBag.AllChefs = _context.Chefs
                .ToList();
                return RedirectToAction("Dishes");
            }
            ViewBag.AllChefs = _context.Chefs
            .ToList();
            return View("DishForm");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
