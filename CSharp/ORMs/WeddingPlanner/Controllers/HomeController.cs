using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Controllers
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
            return View();
        }

        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(user => user.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!!");

                    return View("Index");
                }

                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

                _context.Users.Add(newUser);
                _context.SaveChanges();

                return RedirectToAction("Index");
            }
            return View("Index");
        }
        [HttpPost("checkLogin")]
        public IActionResult CheckLogin(LoginUser login)
        {
            if(ModelState.IsValid)
            {
                User userInDb = _context.Users.FirstOrDefault(user => user.Email == login.LoginEmail);

                if(userInDb == null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid login");

                    return View("Index");
                }
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();

                var result = hasher.VerifyHashedPassword(login, userInDb.Password, login.LoginPassword);

                if(result == 0)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid login");

                    return View("Index");
                }

                Console.WriteLine("logged in");
                HttpContext.Session.SetInt32("userId", userInDb.UserId);
                return RedirectToAction("Dashboard");
            }

            return View("Index");
        }
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");
            
            ViewBag.Weddings = _context.Weddings
            .Include(wed => wed.Rsvp)
            .ToList();

            ViewBag.UserId = loggedUserId;

            return View();
        }
        [HttpGet("weddingform")]
        public IActionResult WeddingForm()
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");
            if(ModelState.IsValid)
            ViewBag.UserId = HttpContext.Session.GetInt32("userId");


            return View();
        }

        [HttpPost("CreateWedding")]
        public IActionResult CreateWedding(Wedding newWedding)
        {
            
            if(ModelState.IsValid)
            {
                Console.WriteLine("We have a wedding!");
                _context.Weddings.Add(newWedding);
                _context.SaveChanges();

                return RedirectToAction("Dashboard");
            }
            Console.WriteLine("Something went wrong!");
            return View("WeddingForm");
        }

        [HttpGet("weddings/{id}")]
        public IActionResult SingleWedding(int id)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");

            ViewBag.Wedding = _context.Weddings
            .FirstOrDefault(wed => wed.WeddingId == id);

            ViewBag.Guests = _context.Users
            .Include (user => user.Rsvp)
            .Where(user => user.Rsvp.Any(rsvp => rsvp.WeddingId == id))
            .ToList();

            return View();
        }

        [HttpGet("weddings/delete/{id}")]
        public IActionResult DeleteWedding(int id)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");
            Wedding wedding = _context.Weddings.FirstOrDefault(wed => wed.WeddingId == id);
            _context.Weddings
            .Remove(wedding);
            _context.SaveChanges();

            return RedirectToAction("Dashboard");
        }

        [HttpGet("rsvp/add/{weddingId}")]
        public IActionResult AddRsvp(int weddingId)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");

            Rsvp rsvp = new Rsvp();
            rsvp.UserId = (int)loggedUserId;
            rsvp.WeddingId = (int)weddingId;

            _context.Rsvps
            .Add(rsvp);
            _context.SaveChanges();

            return RedirectToAction("Dashboard");
        }



        [HttpGet("rsvp/delete/{weddingId}")]
        public IActionResult DeleteRsvp(int weddingId)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("userId");
            if(loggedUserId == null) return RedirectToAction("Index");

            Rsvp rsvp = _context.Rsvps.FirstOrDefault(rsvp => rsvp.UserId == loggedUserId && rsvp.WeddingId == weddingId);

            _context.Rsvps
            .Remove(rsvp);
            _context.SaveChanges();

            return RedirectToAction("Dashboard");
        }



        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
