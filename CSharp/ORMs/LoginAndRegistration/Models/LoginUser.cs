using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class LoginUser
    {
        [Required]
        public string LoginEmail {get;set;}
        [Required]
        [DataType(DataType.Password)]
        public string LoginPassword {get;set;}
    }
}