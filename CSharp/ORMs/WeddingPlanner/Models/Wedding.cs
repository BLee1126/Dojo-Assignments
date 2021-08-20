using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId {get;set;}
        [Required]
        public string Wedder1 {get;set;}
        [Required]
        public string Wedder2 {get;set;}
        [Required]
        [DataType(DataType.Date)]
        [MustBeFuture]
        public DateTime Date {get;set;}
        [Required]
        public string Address {get;set;}
        public List<Rsvp> Rsvp {get;set;}
        public int CreatorId {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
    public class MustBeFuture : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(value is DateTime)
            {
                DateTime checkMe;
                checkMe = (DateTime)value;
                if(checkMe < DateTime.Now)
                {
                    return new ValidationResult("Date must be in the future!");
                }
                else
                {
                    return ValidationResult.Success;
                }
            }
            else
            {
                return new ValidationResult("Not a date");
            }
        }
    }
}