

//Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var p2 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"] )
// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// Create 2 more pizzas with any toppings we like!
var p1 = pizzaOven("thin", "marinara", "mozzeralla", ["peperronni", "mushrooms", "bell peppers", "onions"])
var p4 = pizzaOven("deep dish", "marinara", ["mozzarella", "feta"], ["peperronni", "mushrooms", "bell peppers", "onions"])
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function randomPizza(numCheese, numToppings){
    var crustRand = ["thin", "hand tossed", "deep dish"];
    var sauceRand = ["marinara", "traditional", "white", "ranch", "meat"];
    var cheeseRand = ["mozzarella", "feta", "pepperjack", "cheddar", "gouda"];
    var toppingsRand = ["peperroni", "sausage", "mushroom", "onions", "bell peppers", "olive", "anchovies"];
    var cheeseCombo =[];
    var toppingCombo =[];
    for(i = 0; i < numCheese; i++){
        cheeseCombo.push(cheeseRand[getRandomInt(cheeseRand.length-1)]);
    }
    for(i = 0; i < numToppings; i++){
        toppingCombo.push(toppingsRand[getRandomInt(toppingsRand.length-1)]);
    }
    return(pizzaOven(crustRand[getRandomInt(crustRand.length-1)], sauceRand[getRandomInt(sauceRand.length-1)], cheeseCombo, toppingCombo))
    
}
function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crust = crustType
    pizza.sauce = sauceType
    pizza.cheese = cheese
    pizza.toppings = toppings
    return pizza;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(randomPizza(2, 5))
