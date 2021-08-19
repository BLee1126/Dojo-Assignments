using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Controllers
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
            return RedirectToAction("Products");
        }

        [HttpGet("products")]
        public IActionResult Products()
        {
            ViewBag.Products = _context.Products.ToList();
            return View();
        }

        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.Categories = _context.Categories.ToList();
            return View();
        }

        [HttpPost("products/submit")]
        public IActionResult SubmitProduct(Product product)
        {
            if(ModelState.IsValid)
            {
                _context.Products.Add(product);
                _context.SaveChanges();
                return RedirectToAction("Products");
            }
            return RedirectToAction("Products");
        }
        
        [HttpPost("categories/submit")]
        public IActionResult SubmitCategory(Category category)
        {
            if(ModelState.IsValid)
            {
                _context.Categories.Add(category);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            }
            return RedirectToAction("Categories");
        }

        [HttpGet("products/{id}")]
        public IActionResult SingleProduct(int id)
        {
            ViewBag.SingleProduct = _context.Products
            .Include(prod => prod.ProductCategory)
            .ThenInclude(pc => pc.Category)
            .FirstOrDefault(prod => prod.ProductId == id);

            ViewBag.Categories = _context.Categories
            .Include (pc => pc.ProductCategory)
            .ThenInclude(p => p.Product)
            .Where(c => c.ProductCategory.All(a => a.ProductId != id))
            .ToList();
            return View();
        }

        [HttpPost("SubmitAssociation1")]
        public IActionResult SubmitAssociation1(Association link)
        {

            if(ModelState.IsValid)
            {
                _context.Associations.Add(link);
                _context.SaveChanges();
                return RedirectToAction("SingleProduct", new {id=link.ProductId});
            }
            return RedirectToAction("SingleProduct", new {id=link.ProductId});
        }

        [HttpGet("categories/{id}")]
        public IActionResult SingleCategory(int id)
        {
            ViewBag.SingleCategory = _context.Categories
            .Include(c => c.ProductCategory)
            .ThenInclude(pc => pc.Product)
            .FirstOrDefault(c => c.CategoryId == id);

            ViewBag.Products = _context.Products
            .Include (pc => pc.ProductCategory)
            .ThenInclude(p => p.Product)
            .Where(c => c.ProductCategory.All(a => a.CategoryId != id))
            .ToList();
            return View();
        }
        [HttpPost("SubmitAssociation2")]
        public IActionResult SubmitAssociation2(Association link)
        {

            if(ModelState.IsValid)
            {
                _context.Associations.Add(link);
                _context.SaveChanges();
                return RedirectToAction("SingleCategory", new {id=link.CategoryId});
            }
            return RedirectToAction("SingleCategory", new {id=link.CategoryId});
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
