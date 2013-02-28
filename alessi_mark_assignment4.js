/* alert("JavaScript works!");

 Mark Alessi
 SDI 1302
 Project 4
 Function Library
*/

// var myLibrary = function() {

/* #1 - Format a number to use a specific number of decimal places,
 as for money: 2.1 → 2.10 
*/

function decimalSpots(numberUsed) {
    var number = numberUsed
    number.toFixed(2)
    return console.log("#1 - Format a number to use a specific number of decimal places, as for money: $" + number.toFixed(2));
    }


decimalSpots(75);  // called function // 75 dollars

/* #2 - Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: “a,b,c” + “,” + “/” --> “a/b/c”.
*/

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
console.log("#2 - String Seperator"); 
console.log("String: " + stringToSplit + " ");
console.log("Separator:" + separator + " , and " + slash);
console.log("This string array has " + arrayOfStrings.length + " elements: ");
 
  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " , ");
  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}
 
var monthString = "ABC";
 
var space = " ";
var comma = "";
var slash = "/";
 
splitString(monthString, comma);