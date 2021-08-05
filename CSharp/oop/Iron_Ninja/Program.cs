using System;
using System.Collections.Generic;


namespace Iron_Ninja
{
        class Buffet
    {
        public List<Food> Menu;
         
        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Spaghetti", 500, false, false),
                new Food("Sundae", 200, false, true),
                new Food("Tacos", 300, true, false),
                new Food("Hamburger", 400, false, false),
                new Food("Fish with Sweet and Spicy Sauce", 500, true, true),
                new Food("Pizza", 700, false, false),
                new Food("Steak", 800, false, false)
            };
        }
         
        public Food Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(Menu.Count)];
        }
        
        public Ninja EatingContest(SpiceHound spicehound, SweetTooth sweettooth)
        {
            while(sweettooth.IsFull == false )
            {
                sweettooth.Consume(Serve());
            }
            while (spicehound.IsFull == false)
            {
                spicehound.Consume(Serve());
            }
            Ninja winner;
            if ( sweettooth.ConsumptionHistory.Count > spicehound.ConsumptionHistory.Count)
            {
                winner = sweettooth;
                Console.WriteLine($"Sweet Tooth wins! He consumed {sweettooth.ConsumptionHistory.Count} items");
            }
            else
            {
                winner = spicehound;
                Console.WriteLine($"Spice Hound  wins! He consumed {spicehound.ConsumptionHistory.Count} items");
            }

            return winner;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Buffet heckyeah = new Buffet();
            SweetTooth kelvin = new SweetTooth();
            SpiceHound matt = new SpiceHound();
            heckyeah.EatingContest(matt, kelvin);
        }
    }
}
