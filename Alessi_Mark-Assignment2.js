

// Mark Alessi
// SDI 0113
// Project 2

//variables


// code for loop

var countDown = 5;

	alert("Are you ready for some football?")
while (countDown > 0) {
	alert(countDown);
countDown--;
};
	alert("Hike!");

// code for arrays
var team1 = "Ravens",
	team2 = "Patriots",
	team3 = "Falcons",
	team4 = "49ers"
;

var teams = [
	"Ravens",
	"Patriots",
	"Falcons",
	"49ers"
];

var predictions = [
	" lose",
	" win",
	" lose",
	" win"
];

for (var i=0, j=teams.length; i < j; i++){
	alert( "The " + teams[i] + " are going to " + predictions[i] + " this weekend!");
};