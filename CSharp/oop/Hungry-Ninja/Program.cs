using System;
using System.Collections.Generic;

namespace Hungry_Ninja
{
    class Food
    {
    public string Name;
    public int Calories;
    // Foods can be Spicy and/or Sweet
    public bool IsSpicy; 
    public bool IsSweet; 
    // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
    public Food(string name,int cal,bool spice,bool sweet)
    {
        Name = name;
        Calories = cal;
        IsSpicy = spice;
        IsSweet = sweet;
    }
    }
    class Buffet
    {
        public List<Food> Menu;
         
        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Spaghetti", 1300, false, false),
                new Food("Sundae", 700, false, true),
                new Food("Tacos", 1200, true, false),
                new Food("Hamburger", 1300, false, false),
                new Food("Fish with Sweet and Spicy Sauce", 1000, true, true),
                new Food("Pizza", 2800, false, false),
                new Food("Steak", 1600, false, false)
            };
        }
         
        public Food Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(Menu.Count)];
        }
    }
    class Ninja
{
    private int calorieIntake;
    public List<Food> FoodHistory;
    // add a constructor
    public Ninja()
    {
        calorieIntake = 0;
        FoodHistory = new List<Food>();
    }
    // add a public "getter" property called "IsFull"
    public bool IsFull()
    {
        if(calorieIntake > 1200)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    // build out the Eat method
    public void Eat(Food item)
    {
        if(calorieIntake < 1200)
        {        
        calorieIntake += item.Calories;
        FoodHistory.Add(item);
        Console.WriteLine($"{item.Name} - Spicy? {item.IsSpicy} - Sweet? {item.IsSweet}");
        }
        else if(calorieIntake >= 1200)
        {
            Console.WriteLine("Ninja is Full! He can not eat anymore!");
        }
    }
}



    class Program
    {
        static void Main(string[] args)
        {
            Buffet uhoh = new Buffet();
            Ninja sbeve = new Ninja(); 
            // Console.WriteLine(sbeve.FoodHistory);
            // sbeve.FoodHistory.Add(uhoh.Serve());
            
            sbeve.Eat(uhoh.Serve());
            Console.WriteLine(sbeve.IsFull());
            sbeve.Eat(uhoh.Serve());
            Console.WriteLine(sbeve.IsFull());
        }
    }
}
