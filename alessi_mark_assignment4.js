
// String and function
// toUpperCase function used
// The string given by user --> prompt to enter name 
// This is a built in JS function which converts the specified string into all CAPITAL letters!! 


var name = prompt("Please enter your name")
console.log("Hello " + name.toUpperCase() + " !" )
 
var areaCode = prompt("Please enter your area code")  

var phoneNumber = prompt("Plese enter your phone number - Example: 987-6543 ")

console.log("Your phone number is (" + areaCode + ")" + phoneNumber);


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


// in my previous JavaScript class I used status property a bit
// to me it's easier when you have several conditions that take place


status = (work < 40) ? regPay = work * rate: regPay = rate * 40   
status = (work > 40) ? ot = work - 40 : ot = 0 
status = (work > 40) ? otPay = regPay * rate * 1.5 : otPay = 0
status = (work < 40) ? regHours = work : regHours = 40

var otRate = ot * rate * 1.5 
var totalPay = regHours * rate + otRate

var num = rate;
var n=num.toFixed(2);

// pay calc outputs 
// I always imputed 50 hours at $10 and hour to make sure my functions work properly
// Then I made sure it worked for > 40 hrs as well 


console.log("Regular Pay: " + regHours + " hours @ $", + rate + ".00 per hour = $" + regHours * rate +".00" )
console.log("You have worked " + ot + " hours of overtime this week." )
console.log("Your overtime pay rate is $ " + rate * 1.5 + ".00 per hour")
console.log("Your additional overtime pay is $ " + otRate + ".00 " )
console.log("Your total Earnings are: $" + totalPay + ".00")


//string, array, and boolean


var payDay = "Pay Day!";
var spend = [" Paying Bills" , " Partying Hard" ,  " Investing Wisely" , " Giving it to a spouse" ];
var broke = true; 

//array outputs
// var name is global var - same variable name retrieved from first prompt

console.log("Hey " + name + " it's " + payDay);
console.log("What are you going to do with all that money?" + "\n" + "Will you be " + spend + "?"  );
console.log("If you're like me then you probably will be " + spend[3] + " !" );
console.log("Yes, it's " + broke + " that I'm broke already!" + "\n" + "Maybe next time I will be" + spend[2]);

// function
// function getClockTime() logs actual time in HH:MM:SS AM/PM Format


var clockTime = getClockTime()
function getClockTime()

{
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   if (second < 10) { second = "0" + second; }
   var timeString = hour +
                    ':' +
                    minute +
                    ':' +
                    second +
                    " " +
                    ap;
   return timeString;
} 

// displays time through console log and addresses by global var name 
// same variable name from initial prompt 

console.log("The time is now " + clockTime);
console.log("It's time to start" + spend[0] + " " + name );

