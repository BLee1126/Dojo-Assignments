using System;

namespace Wizard_Ninja_Samurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard sbeve = new Wizard("Sbeve");
            Samurai kelvin = new Samurai("Kelvin");
            Ninja matt = new Ninja("Matt");
            kelvin.Attack(sbeve);
            sbeve.Attack(matt);
            matt.Attack(kelvin);
            sbeve.Heal(kelvin);
            
            
        }
    }
}
