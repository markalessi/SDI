// alert("JavaScript works!");
// Mark Alessi
// SDI 1302
// Project 2

// Disclaimer: While the story and code for this project is 
// my sole idea, the concept (SpongeBob Square Pants) and show themes are not mine.
// I referenced the site http://spongebob.wikia.com/wiki/The_SpongeBob_SquarePants_Wiki
// for some factual information on this fictional program. Thank you! 

// main code
// global variables

var jellyFishPer = 3;
var jarsNeeded = 3;
// array string
var krabbyPattyRecipe = [" crab meat patty", " sea lettuce", " sea onion", " sea tomato", 
" sea pickles", " sea mustard", " sea ketchup", " cheese"];
// proceduce -- argument is not returned only output to console

function sbGreet(){
console.log("Hello! I'm SpongeBob Square Pants! Hahaha! Nice to meet you!");  
// console.log("Uh, Hello, Uh, this is Patrick... I think");	
};

sbGreet();

// number function -- outcome is passed back to main code

var multiply = function(jellyFishPer,jarsNeeded){
	var totalJellyFish = jellyFishPer * jarsNeeded;

	return(totalJellyFish); // local variable 
};

// var division = function(firstNumber,secondNumber){
// if (secondNumber === 0) {
// return("Can't divide by zero!");
//	} else {
//	var outcome = firstNumber/secondNumber;
//	return "The answer is " + outcome;
//	}
	
//  };

// main code 

var multiplyOutcome = multiply(jellyFishPer,jarsNeeded);

console.log("It's time to go Jelly Fishing!")
console.log("We need to catch " + jellyFishPer + " jelly fish for every jar of jelly needed.")
console.log("Mr. Krabs wants " + jarsNeeded + " jars of jelly!")
console.log("Oh, tarter sauce! That means we need to catch a total of " + multiplyOutcome + " jelly fish!")

//while-loop

var jellyFish = 1; //iterator, counter
while (jellyFish < multiplyOutcome){
console.log(jellyFish + " jelly fish have been caught!"); //true output 
jellyFish++;
if (jellyFish === multiplyOutcome){
console.log("Yay! All " + jellyFish + " jelly fish caught!"); // false output	
}
};
// string function 

var krustyKrabOpen = function(work,multiplyOutcome){
	var work = "it's time to go to work!";
return work;

console.log("Now that we caught " + multiplyOutcome + " jelly fish " + work);
};

// array functions

// push function

krabbyPattyRecipe.push(" the secret ingredient");

// unshift function

krabbyPattyRecipe.unshift(" a seaweed bun");

// console.log (krabbyPattyRecipe);

console.log("Here is a list of ingredients I need to make a delicious Krabby Patty!")

// array for-loop

for (var i=0, k=krabbyPattyRecipe.length; i < k; i++) {	
	console.log(krabbyPattyRecipe[i]);
};

// for-loop 

for (var krabbyPatty = 3; krabbyPatty > 1; krabbyPatty--) {
	console.log("I need to make " + krabbyPatty + " more krabby patties.");
};
	console.log("I need to make " + krabbyPatty + " more krabby patty.");

// repeated for-loop for correct grammar 

for (var krabbyPatty = 1; krabbyPatty > 0; krabbyPatty--) {
};
console.log("I've made all the krabby patties!");
