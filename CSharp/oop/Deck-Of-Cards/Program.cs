using System;
using System.Collections;
using System.Collections.Generic;

namespace Deck_Of_Cards
{
    class Card
    {
        public string StringVal;
        public string Suit;
        public int Val;

        public Card(string suit, string stringvalue, int intvalue)
        {
            StringVal = stringvalue;
            Suit = suit;
            Val = intvalue;        
            }
        
    }
    class Deck : System.Collections.IEnumerable
    {
        public List<Card> Cards;
        public  Deck()
        {
            string[] suits = {"Clubs", "Spades", "Hearts", "Diamonds"};
            string[] stringValues = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
            int[] intValues = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};

            List<Card> deck = new List<Card>();
            for (int i = 0; i < suits.Length; i++)
            {
                for ( int j = 0; j < intValues.Length; j++)
                {
                    Card card = new Card(suits[i], stringValues[j], intValues[j]);
                    deck.Add(card);
                }
            }
            Cards = deck;
        }

        public IEnumerator GetEnumerator()
        {
            throw new NotImplementedException();
        }
        public Card Deal()
        {
            Card removedCard = Cards[0];
            Cards.RemoveAt(0);
            return removedCard;
        }
        public void Reset()
        {
            string[] suits = {"Clubs", "Spades", "Hearts", "Diamonds"};
            string[] stringValues = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
            int[] intValues = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};

            List<Card> deck = new List<Card>();
            for (int i = 0; i < suits.Length; i++)
            {
                for ( int j = 0; j < intValues.Length; j++)
                {
                    Card card = new Card(suits[i], stringValues[j], intValues[j]);
                    deck.Add(card);
                }
            }
            Cards = deck;
        }
        private Random rand = new Random();  

        public void Shuffle()  
        {  
            int n = Cards.Count;  
            while (n > 1) {  
                n--;  
                int k = rand.Next(n + 1);  
                Card value = Cards[k];  
                Cards[k] = Cards[n];  
                Cards[n] = value;  
            }  
        }
        public void ShowDeck()
        {    
            foreach (Card card in Cards)
            {
                Console.WriteLine($"{card.Suit} - {card.StringVal} - {card.Val}");
            }
        }
    }
    class Player
    {
        
        public string Name;
        public List<Card> Hand = new List<Card>();

        public Player(string name)
        {
            Name = name;
        }

        public Card Draw(Deck deck)
        {
            Card card = deck.Deal(); 
            Hand.Add(card);
            return card;
        }

        public Card Discard(int index)
        {
            Card discardCard = Hand[index];
            Hand.RemoveAt(index);
            return discardCard;
        }
        public void ShowHand()
        {
            Console.WriteLine($"{Name}'s Hand");
            foreach (Card card in Hand)
            {
                Console.WriteLine($"{card.Suit} - {card.StringVal}");
            }
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            Deck deck1 = new Deck();
            deck1.Shuffle();
            // deck1.ShowDeck();
            Player sbeve = new Player("Sbeve");
            sbeve.Draw(deck1);
            sbeve.Draw(deck1);
            sbeve.ShowHand();
            sbeve.Discard(1);
            sbeve.ShowHand();
        }
    }
}
