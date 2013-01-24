// Project 3 
// Mark Alessi

var arr = [true, false, "", [], function(){}, 101];

var student = {
	id: "00000111",
	name: "Mike",
	interests: [
		"JavaScript",
		"HTML",
		"CSS",
		"Flash"
	],
	age: 503423,
	sayHi: function () {
			console.log("Hi");
	}
};

var key = "age";

console.log( student[key] );
console.log( student["interests"] );
console.log( student.interests );


student.sayHi() ;

student.sayHi = function () {
	console.log("Get lost");
};

student["sayHi"]();

for (var key in student) {
	console.log("key: " + key + ", value: " + student [key]);
};

//
You'll notice on your Project 3 Flowchart that all of your functions are really methods. A method is a function (or procedure) that is a value inside an object. Methods are used to provide functionality to objects, as actions the objects know how to perform.
You'll also notice that there are a number of variables (Internal Storage elements) on the flowchart that are labeled as properties. Properties are values in objects that are not functions, and are mostly used to describe aspects of that object.
For example, consider an example Pirate object:
var pirate = {
    realName:    "Jean Lafitte",
    rank:        "Captain",
    privateer:   true,
    ships:       [ "La Diligent", "Pride" ],
    sailTo:      function (destination) {},
    getLocation: function () {}
};
That object has four properties: realName, rank, privateer, and ships. Each property describes something about the object, and can be any data type other than a function.
The object also has two methods, sailTo and getLocation, that represent what the object knows how to do. Methods are just functions that live inside of objects. So if you wanted to tell the pirate object to sail to a location, you would say:
pirate.sailTo("Tortuga");
Since that sailTo function is inside the object, you can't call the function without going through the object. You couldn't just call sailTo("Tortuga") without the pirate because of the scope issues you learned about.
As most of the functions and variables you need for Project 3 are methods and properties, most of your code will be inside of objects. Your main narrative will probably be a series of method calls:
var pirate = { /* stuff here */ },
    ship   = { /* more stuff here */ },
    target = "Tortuga";
pirate.announce("Our target today is " + target + ".");
var myName = pirate.getRealName();    // accessor method
pirate.announce("We'll find plunder, or my name isn't " + myName + "!");
pirate.sailTo(target);                // mutator + procedure method
var damage = pirate.attack(target);   // function method
pirate.repairDamage(damage, ship);    // object argument
And so on, and so forth. You can see that there's a high-level story, and that the low-level details (such as how to repair damage) are handled inside the object methods.

//
