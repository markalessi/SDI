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

