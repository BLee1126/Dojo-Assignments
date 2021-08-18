using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId {get;set;}
        [Required]
        [Display(Name = "First Name")]
        public string FirstName {get;set;}
        [Required]
        [Display(Name = "Last Name")]
        public string LastName {get;set;}
        public List<Dish> CreatedDishes {get;set;}
        [Required]
        [NoTimeTravel]
        public DateTime Birthday {get;set;}
        public int Age {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
    }
    public class NoTimeTravel : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(value is DateTime)
            {
                DateTime checkMe;
                checkMe = (DateTime)value;

                if(checkMe > DateTime.Now)
                {
                    return new ValidationResult("no time travel is allowed!");
                }
                else
                {
                    return ValidationResult.Success;
                }
            }
            else
            {
                return new ValidationResult("not a date time");
            }
        }
    }

}