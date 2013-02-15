// alert("JavaScript works!");
// Mark Alessi
// SDI 1302
// Project 2

// Disclaimer: While the story and code for this project is 
// my sole idea, the concept (SpongeBob Square Pants) and show themes are not mine.
// I referenced the site http://spongebob.wikia.com/wiki/The_SpongeBob_SquarePants_Wiki
// for some factual information on this fictional program. Thank you! 

// proceduce -- argument is not returned only output to console
// global variables

var jellyFishPer = 3;
var jarsNeeded = 3;

function sbGreet(){
console.log("Hello! I'm SpongeBob Square Pants! Hahaha! Nice to meet you!");  
console.log("Uh, Hello, Uh, this is Patrick... I think");	
};

sbGreet();

// number function -- outcome is passed back to main code

var multiply = function(jellyFishPer,jarsNeeded){
	var totalJellyFish = jellyFishPer * jarsNeeded;

	return(totalJellyFish); // local variable 
};
// main code 

var multiplyOutcome = multiply(jellyFishPer,jarsNeeded);


console.log("It's time to go Jelly Fishing!")
console.log("We need to catch " + jellyFishPer + " jelly fish for every jar of jelly needed.")
console.log("Mr. Krabs wants " + jarsNeeded + " jars of jelly!")
console.log("Oh, tarter sauce! That means we need to catch a total of " + multiplyOutcome + " jelly fish!")

//while-loop

var jellyFish = 0; //iterator, counter
while (jellyFish < multiplyOutcome){
console.log(jellyFish + " jelly fish caught."); //true output 
jellyFish++;
if (jellyFish === multiplyOutcome){
console.log("Yay! All " + jellyFish + " jelly fish caught!"); // false output	
}
};


// for-loop ** repeated for correct grammar

for (var krabbyPatty = 3; krabbyPatty > 1; krabbyPatty--) {
	console.log("I need to make " + krabbyPatty + " more krabby patties.");
};
	console.log("I need to make " + krabbyPatty + " more krabby patty.");

for (var krabbyPatty = 1; krabbyPatty > 0; krabbyPatty--) {
};
console.log("I've made all the krabby patties!");

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