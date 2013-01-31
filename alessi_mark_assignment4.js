// String

var name = prompt("Please enter your name")
console.log("Hello " + name.toUpperCase() + " !" )



var work = prompt("Please enter number of hours worked this week", "")
console.log("You have worked " + work + " hours this week. ")

var rate = prompt("Please enter your normal hourly rate.", "")
console.log("Your pay rate is $ " + rate + ".00 per hour")


console.log("Regular Pay: " + work + " hours @ $", + rate + ".00 per hour = $" + work * rate +".00" )




function ot() 
{

if (work > 40) {ot = work - 40
} else {  ot = 0

}
}

console.log("You have worked " + ot + " hours of overtime this week." );

function payRate() 
{

if (work > 40) {payRate = rate * 40 + ot

	} else { 
payRate = rate  
}

function ot() 
{

if (work > 40) {ot = work - 40

	} else { 
ot = 0
}

function otPay() 
{

if (work > 40) {otPay = work * rate * payRate

	} else { 
otPay = 0
}	

console.log("Your otal Earnings are: $", + work * rate * payRate);

}
};
};