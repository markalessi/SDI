//alert("JavaScript works!");

// Mark Alessi
// SDI 1302
// Project 4
// Function Library

// var myLibrary = function() {

// #1 - Format a number to use a specific number of decimal places,
// as for money: 2.1 → 2.10 

function decimalSpots(numberUsed) {
    var number = numberUsed
    number.toFixed(2)
    return console.log("#1 - Format a number to use a specific number of decimal places, as for money: $" + number.toFixed(2));
    }


decimalSpots(75);  // called function // 75 dollars

/* #2 - Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: “a,b,c” + “,” + “/” --> “a/b/c”.
+*/

function split(stringToSplit, separator) {
  var string = stringToSplit.split(separator);
console.log("#2 - String Seperator"); 
console.log("String: " + stringToSplit + " ");
console.log("Separator:" + separator + " , and " + slash);
console.log("This string array has " + string.length + " elements: ");
 
  for (var i=0; i < string.length; i++)
    console.log(string[i] + " , ");
  for (var i=0; i < string.length; i++)
    console.log(string[i] + " / ");
}
 
var string = "ABC";
 
var space = " ";
var comma = "";
var slash = "/";
 
split(string, comma);

/*
# 3 - Validate Email (w/out RegEx)

Rules for validating email: 
a) at symbol (@) needed 
b) dot (.) is required 
c) min. of 2 characters required between @ and .

**** validation check is performed on the document 
for ease of use *****
*/

console.log("#3 - Does a string follow an aaa@bbb.ccc pattern like an email address?")
console.log("Please check your validation on the document above.")
function validate(){
		var email=document.getElementById("email");
		var atChar=email.value.indexOf("@");
		var dotChar=email.value.lastIndexOf(".");
 
		if(atChar==-1 || dotChar==-1 || (atChar+2)>=dotChar){
			console.log("Please recheck. E-mail address entered is not valid.");
		}
		else{
			console.log("Thank you for submitting your email!");
		}
	}

//	
