// String and toUpperCase function
// The string given by user --> prompt to enter name 
// This is a built in JS function which converts the specified string into all CAPITAL letters!! 


var name = prompt("Please enter your name")
console.log("Hello " + name.toUpperCase() + " !" )
 
var areaCode = prompt("Please enter your area code")  

var phoneNumber = prompt("Plese enter your phone number")

console.log("Your phone number is (" + areCode + ")" + phoneNumber);


// Pay calculator 
// This function takes input from user to calculate normal hours worked (up to 40)
// and add to any overtime hours (if necessarry) and calculate pay based on inputed pay rate 

var work = prompt("Please enter number of hours worked this week", "")
console.log("You have worked " + work + " hours this week. ")

var rate = prompt("Please enter your normal hourly rate.", "")
console.log("Your pay rate is $ " + rate + ".00 per hour")

var ot 
var regPay
var otPay
var regHours 


status = (work < 40) ? regPay = work * rate: regPay = rate * 40   
status = (work > 40) ? ot = work - 40 : ot = 0 
status = (work > 40) ? otPay = regPay * rate * 1.5 : otPay = 0
status = (work < 40) ? regHours = work : regHours = 40

var otRate = ot * rate * 1.5 
var totalPay = regHours * rate + otRate

console.log("Regular Pay: " + regHours + " hours @ $", + rate + ".00 per hour = $" + regHours * rate +".00" )
console.log("You have worked " + ot + " hours of overtime this week." )
console.log("Your overtime pay rate is $ " + rate * 1.5 + ".00 per hour")
console.log("Your additional overtime pay is $ " + otRate + ".00 " )
console.log("Your total Earnings are: $" + totalPay + ".00")

