using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefDishes.Models
{
    public class Dish {
        [Key]
        public int DishId {get;set;}
        [Required]
        [Display(Name = "Chef's Name")]
        public int ChefId {get;set;}
        [Required]
        public string Name {get;set;}
        [Required]
        [Range(1, 10000)]
        public int Calories {get;set;}
        [Required]
        [Range(1, 5)]
        public int Tastiness {get;set;}
        [Required]
        public string Description {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}