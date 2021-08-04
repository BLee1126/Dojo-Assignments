using System;

namespace Human
{
    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;
         
        // add a public "getter" property to access health
        public int ShowHealth
        {
            get { return health; }
        } 
        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        // Add a constructor to assign custom values to all fields
        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }
        // Build Attack method
        public void Attack(Human target)
        {
            Console.WriteLine($"{Name} attacks {target.Name} and does {5*Strength} damage!");
            target.health -= 5*Strength;
            Console.WriteLine($"{target.Name} has {target.ShowHealth} left!");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Human sbeve = new Human("Sbeve");
            Human Brian = new Human("Brian", 10, 10, 10, 1000);
            sbeve.Attack(Brian);
            Console.WriteLine("Haha, you do very little damage! Take this!");
            Brian.Attack(sbeve);

        }
    }
}
