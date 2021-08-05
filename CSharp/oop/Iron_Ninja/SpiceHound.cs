using System;
namespace Iron_Ninja
{
    class SpiceHound : Ninja
    {
        public override bool  IsFull {get{return calorieIntake > 1200;}}
        public override void Consume(IConsumable item)
        {
            // provide override for Consume
            if (IsFull)
            {
                Console.WriteLine("Spice Hound is full!");
                return;
            }
            int newCalories = (item.IsSpicy)?  item.Calories - 5 : item.Calories;
            calorieIntake += newCalories;
            ConsumptionHistory.Add(item);
            item.GetInfo();
        }
    }
}
