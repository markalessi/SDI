
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

// function
// function getClockTime()

function getClockTime()
{
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   if (second < 10) { second = "0" + second; }
   var timeString = hour +
                    ':' +
                    minute +
                    ':' +
                    second +
                    " " +
                    ap;
   return timeString;
} 

var clockTime = getClockTime();

if (clockTime < 11)
  {
  x = meal[0];
  }
else if (clockTime < 11 > 16)
  {
  x = meal[1];
  
  }else{

  x = meal[2];
  }

var sand = {
favTypes: function(i){
if (i = 0) {
	console.log("I could eat" + favTypes[0]); 
} else 		{
	console.log("I could eat" + favTypes[i++]);
}
}
};

console.log("The time is now " + clockTime);
console.log("It's time to eat " + x + "\n" + "What sandwich will you choose?");
console.log("You could eat a " + favTypes[0] + "or " )
console.log("\n" + "You could eat a " + favTypes[1] + " or " )
console.log("\n" + "You could eat a " + favTypes[2] + " or " )
console.log("\n" + "You could eat a " + favTypes[3] + " or " )
console.log("\n" + "You could eat a " + favTypes[4] + " Sandwich" )



