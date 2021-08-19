using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories
{
    public class Category
    {
        [Key]
        public int CategoryId {get;set;}
        public string CategoryName {get;set;}
        public List <Association> ProductCategory {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}