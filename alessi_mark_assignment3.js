// alert("JavaScript works!");
// Mark Alessi
// SDI 1302
// Project 3

// JSON


// object

var citizen = { 
    "characters": {  
	  "citizen1": { 
	name: "Spongebob Square Pants",
	lives: "in a pineapple",
	interests: "blowing bubbles",
	friends: [
		"Patrick Star",
		 "Sandy Cheecks",
		 "Squidward Tenticles",
		 "Mr.(Eugene) Krabs",
		 "Larry the Lobster"
	], 
},
 "citizen2": {
	name: "Patrick Star",
	lives: "under a rock",
	interests: "blowing bubbles",
	friends: [
		"Spongebob Square Pants",
		 "Sandy Cheecks",
		 "Squidward Tenticles",
		 "Larry the Lobster"	 
	], 
		}
	}
};	
var citizen 	
// function with string concatonation
// function bio 

//bio: function (){
 
		console.log(citizen.characters.citizen1.name + " lives " + citizen.characters.citizen1.lives + " under the sea."); 
		console.log(citizen.characters.citizen1.name +  "'s interests are " + citizen.characters.citizen1.interests + ".");
		console.log(citizen.characters.citizen1.name + " is friends with: " + citizen.characters.citizen1.friends + "."); 

var key = "name";


// calls function bio

//citizen.characters.citizen1.bio();

//  for (var key in citizen) {
//	console.log( key + ": " + citizen[key]);

// for-loop 
var hoursToWork
for (var hoursToWork = 3; hoursToWork > 1; hoursToWork--) {
	console.log(citizen.characters.citizen1.name + " has " + hoursToWork + " more hours until he has to work.");
};
	console.log(citizen.characters.citizen1.name + " has " + hoursToWork + " more hour until he has to work.");

// repeated for-loop for correct grammar 

for (var hoursToWork = 1; hoursToWork > 0; hoursToWork--) {
};
console.log("It's time for " + citizen.characters.citizen1.name +  " to go to work!");