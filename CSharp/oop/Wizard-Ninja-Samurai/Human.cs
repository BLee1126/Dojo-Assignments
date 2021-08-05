using System;
using System.Collections.Generic;

namespace Wizard_Ninja_Samurai
{
    
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        public int health;
         
        public int Health
        {
            get { return health; }
        }
         
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
         
        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }
         
        // Build Attack method
        public virtual int Attack(Human target)
        {
            int dmg = Strength * 3;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.health;
        }
    }
    class Wizard : Human
    
    {      
        public Wizard(string name) : base(name, 3, 25, 3, 50)
        {}
        public override int Attack(Human target)
        {
            int dmg = Intelligence * 5;
            target.health -= dmg;
            this.health += dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            Console.WriteLine($"{Name} healed himself for {dmg} health!");
            return target.health;
        }
        public int Heal(Human target)
        {
            int heal = Intelligence * 10;
            target.health -= heal;
            Console.WriteLine($"{Name} healed {target.Name} for {heal} health!");
            return target.health;
        }
    }
    class Ninja : Human
    {
        public Ninja(string name) : base(name, 3, 3, 175, 100)
        {}
        public override int Attack(Human target)
        {
            Random rand = new Random();
            int dmg = Dexterity * 5;
            int critDmg = (rand.Next(2));
            target.health -= dmg + (10*critDmg);
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg + (10*critDmg)} damage!");
            return target.health;
        }
        public int Steal(Human target)
        {
            int dmg = 5;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage and stole {dmg} health!");
            return target.health;
        }
    }
    class Samurai : Human
    {
        public   Samurai(string name) : base(name, 3, 3, 3, 200)
        {}
        public override int Attack(Human target)
        {
            base.Attack(target);
            if(target.health < 50){
                Console.WriteLine($"{this.Name} hears FINISH HIM!!");
                target.health = 0;
                Console.WriteLine($"{this.Name} slays {target.Name}.");
            }
            return target.health;
        }
        public int Meditate()
        {
            this.health = 200;
            return this.health;
        }
    }
}