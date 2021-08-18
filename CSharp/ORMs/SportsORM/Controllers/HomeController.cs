using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsORM.Models;
using Microsoft.Extensions.Logging;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Women"))
                .ToList();
            ViewBag.HockeyLeagues = _context.Leagues
                .Where(league => league.Sport.Contains("Hockey"))
                .ToList();
            ViewBag.NotFootballLeagues = _context.Leagues
                .Where(league => !league.Sport.Contains("Football"))
                .ToList();
            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Conference"))
                .ToList();
            ViewBag.AtlanticLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Atlantic"))
                .ToList();

            ViewBag.DallasTeams = _context.Teams
                .Where(team => team.Location.Contains("Dallas"))
                .ToList();
            ViewBag.RaptorTeams = _context.Teams
                .Where(team => team.TeamName.Contains("Raptor"))
                .ToList();
            ViewBag.CityTeams = _context.Teams
                .Where(team => team.Location.Contains("City"))
                .ToList();
            ViewBag.BeginWithTTeams = _context.Teams
                .Where(team => team.TeamName.Contains("T"))
                .ToList();
            ViewBag.AllTeamsByLocation = _context.Teams
                .OrderBy(team => team.Location)
                .ToList();
            ViewBag.TeamNameDesc = _context.Teams
                .OrderByDescending(team => team.TeamName)
                .ToList();
            ViewBag.PlayerCooper = _context.Players
                .Where(player => player.LastName.Contains("Cooper"))
                .OrderBy(player => player.FirstName)
                .ToList();
            ViewBag.PlayerJoshua = _context.Players
                .Where(player => player.FirstName.Contains("Joshua"))
                .OrderBy(player => player.LastName)
                .ToList();
            ViewBag.Problem14 = _context.Players
                .Where(player => !player.FirstName.Contains("Joshua") && player.LastName.Contains("Cooper"))
                .ToList();
            ViewBag.Problem15 = _context.Players
                .Where(player => player.FirstName.Contains("Alexander") || player.FirstName.Contains("Wyatt"))
                .ToList();
            return View();
        }

        

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            ViewBag.Problem1 = _context.Leagues
            .Where(league => league.Name == "Atlantic Soccer Conference")
            .Include( league => league.Teams)
            .ToList();

            ViewBag.Problem2 = _context.Teams
            .Where(team => team.TeamName.Contains("Penguins") && team.Location.Contains("Boston"))
            .Include(team => team.CurrentPlayers)
            .ToList();

            ViewBag.Problem3 = _context.Teams
            .Where(team => team.CurrLeague.Name.Contains("International Collegiate Baseball Conference"))
            .Include(team => team.CurrentPlayers)
            .ToList();

            ViewBag.Problem4 = _context.Players
            .Where(player => player.CurrentTeam.CurrLeague.Name.Contains("American Conference of Amateur Football") && player.LastName.Contains("Lopez"))
            .ToList();

            ViewBag.Problem5 = _context.Teams
            .Where(team => team.CurrLeague.Sport.Contains("Football"))
            .Include(team => team.CurrentPlayers)
            .ToList();

            ViewBag.Problem6 = _context.Players
            .Where(player => player.FirstName.Contains("Sophia") || player.LastName.Contains("Sophia"))
            .Include(player => player.AllTeams)
            .ToList();

            ViewBag.Problem7 = _context.Players
            .Where(player => player.FirstName.Contains("Sophia") || player.LastName.Contains("Sophia"))
            .Include(player => player.CurrentTeam)
            .Include(player => player.CurrentTeam.CurrLeague)
            .ToList();

            ViewBag.Problem8 = _context.Players
            .Where(player => player.LastName.Contains("Flores") && !player.CurrentTeam.TeamName.Contains("Roughriders"))
            // .Include(player => player.CurrentTeam)
            // .Include(player => player.CurrentTeam.CurrLeague)
            .ToList();

            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}