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
		} else {
			console.log("Thank you for submitting your email!");
		}

};

/* # 4 Phone validation

var validatePhone = function(num) {
    if (isNaN(num.num2(0,2))) {
        return false
    } else {
		if(isNaN(num.num2(4,6))) {
			return false
    			} else {
    				if(isNaN(num.num2(8,11)))
    					return false
    			} else { 
						return true
	   		    } 		
        }
    }    
};

return { 
validatePhone(813-555-1212)    

};
*/

/*
#5
Find the smallest value in an array than is greater than a given number.
You will need to send two items into the function. The first is an array of numbers
and the second will be a number you’ll compare to numbers within the array. You
will then return the number in the array that is the next highest number to the one
you’re using in the comparison. So, if you send the array [1,4,7,9,10,14,15] and
the number 12 into the function, it should return 14 as the next highest number.
*/


function smallestValue() {
    function filterOut(element, index, array) {
        return (element >= 12);
    }
    var filtered = [1, 4, 7, 9, 10, 14, 15].filter(filterOut);
    filterOut();
    filtered.sort(function (num1, num2) {
        return num1 - num2;
    });
        
    return console.log(filtered.shift());
}

console.log("Find the smallest value in an array than is greater than a given number.")
console.log("Sent the array [1,4,7,9,10,14,15] and the number 12 into the function, it should return 14 as the next highest number.") 
smallestValue()

