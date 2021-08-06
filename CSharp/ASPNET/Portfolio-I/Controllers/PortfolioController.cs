using Microsoft.AspNetCore.Mvc;
namespace Portfolio_I.Controllers     //be sure to use your own project's namespace!
{
    public class PortfolioController : Controller   //remember inheritance??
    {
        [HttpGet("")]       
        public string Index()
        {
            return $"This is my index!";
        }
        [HttpGet("projects")]
        public string Projects()
        {
            return $"These are my projects!";
        }
        [HttpGet("contact")]
        public string Contact(string formInput)
        {
            return $"This is my Contact!";
        }
    }
}