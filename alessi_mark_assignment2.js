// alert("JavaScript works!");
// Mark Alessi
// SDI 1302
// Project 2

// Disclaimer: While the story and code for this project is 
// my sole idea, the concept (SpongeBob Square Pants) is not mine.
// I referenced the site http://spongebob.wikia.com/wiki/The_SpongeBob_SquarePants_Wiki
// for factual information on this fictional program. Thank you! 


// procedure example *** This is like a function but it does not return a value

// var add = function(firstNumber,secondNumber){
// var outcome = firstNumber/secondNumber;

// console.log(outcome);
// };

// division(10,5);



// main code (for this example)

// conditional within function example

var division = function(firstNumber,secondNumber){
	if (secondNumber === 0) {
		return("Can't divide by zero!");
	} else {
		var outcome = firstNumber/secondNumber;
		return "The answer is " + outcome;
	}
	
};

// main code (for this example)		

// var divOutcome = division(10,0)
// console.log(divOutcome);

// divOutcome = division(20,2);
// console.log(divOutcome);
// proceduce -- argument is not returned only output to console.log

function SbGreet(){

console.log("Hello! I'm SpongeBob Square Pants! Hahaha! Nice to meet you!");  
};

SbGreet();
var  jellyFishPer = 3
var  jarsNeeded = 10


// function -- outcome is passed back to main code

var multiply = function(jellyFishPer,jarsNeeded){
	var totalJellyFish = jellyFishPer * jarsNeeded;

	return(totalJellyFish);
};

multiply(jellyFishPer,jarsNeeded);

var multiplyOutcome = multiply(3,10);

console.log("It's time to go Jelly Fishing!")
console.log("We need to catch " + jellyFishPer + " jelly fish for every jar of jelly needed.")
console.log("Mr. Krabs wants " + jarsNeeded + " jars of jelly!")
console.log("Oh, tarter sauce! That means we need to catch a total of " + totalJellyFish + " jelly fish!")
//while-loop

var jellyFish = 0; //iterator, counter
while (jellyFish < 3){
console.log(jellyFish + " jelly fish caught.");
jellyFish++;
};

console.log("All " + jellyFish + " jelly fish caught!");

// for-loop ** repeated for correct grammar

for (var krabbyPatty = 3; krabbyPatty > 1; krabbyPatty--) {
	console.log("You need to make " + krabbyPatty + " more krabby patties.");
};
	console.log("You need to make " + krabbyPatty + " more krabby patty.");

for (var krabbyPatty = 1; krabbyPatty > 0; krabbyPatty--) {
};
console.log("You've made all the krabby patties!");

// array

var krabbyPattyRecipe = [" crab meat patty", " sea lettuce", " sea onion", " sea tomato", 
" sea pickles", " sea mustard", " sea ketchup", " cheese"];

// push function

krabbyPattyRecipe.push(" the secret ingredient");

// unshift function

krabbyPattyRecipe.unshift(" a seaweed bun");

console.log (krabbyPattyRecipe);

// array for-loop
for (var i=0, k=krabbyPattyRecipe.length; i < k; i++) {	
	console.log(krabbyPattyRecipe[i]);
};


// array for each-loop 
// for each (var krabby in krabbyPattyRecipe) {
// console.log(krabby);
// };

// function

var bikiniBottom 