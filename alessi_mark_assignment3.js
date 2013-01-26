
// Project 3 
// Mark Alessi


//var

var name = "Mark";
var favFood = "Sandwiches!";
var favTypes = ["Italian Sub" , " Reuben Sandwich" , " Cuban Sandwich" , "Meatball Sub" , "Roast Beef" ];
var mySand = 3;
var hungry = true; 
var meal = [ "breakfast", "lunch", "dinner", "snack" ]


//output

console.log("My name is " + name + " and it is now time for " + meal[1] + "! ");
console.log("Yes, it is " + hungry + " that I am hungry!" );
console.log("My favorite food is definately " + favFood );
console.log("My top " + mySand + " favorite types of sandwiches are: " + favTypes[0] + "," + favTypes[1] + ", and " + favTypes[2]);

//json


var sands = {
	"type": {
		"number1": {
			"name": "Italian Sub", 
			"Bread": "Italian bread", 
			"Toppings": "mayo, lettuce, tomatoes and black olives"
			},

		"number2": { 
			"name": "Reuben Sandwich",
			"Bread": "Rye, Pumpernickle, or Sourdough", 
			"Toppings": "just mayo"
			},
			
		"number3": { 
			"name": "Cuban Sandwich",
			"Bread": "Cuban bread (pressed)", 
			"Toppings": "mayo, lettuce and tomatoes"
			}
		}
};			

console.log(sands.type);
