// alert("JavaScript works!");
// Mark Alessi
// SDI 1302
// Project 3

//object

var citizen = { 
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

// function whosWho 

	whosWho: function (){
		
// function with string concatonation
 
		console.log(citizen.name + " lives " + citizen.lives + " under the sea."); 
		console.log(citizen.name +  "'s interests are " + citizen.interests + ".");
		console.log(citizen.name + " is friends with " + citizen.friends + "."); 
	}
	
};

console.log(citizen);
console.log(citizen.name);
console.log(citizen["lives"]);

// calls function whosWho

citizen.whosWho();

