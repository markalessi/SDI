
// Project 3 
// Mark Alessi

var arr = [true, false, "", [], function(){}, 101];

var student = {
	id: "00000111",
	name: "Mike",
	interests: [
		"JavaScript",
		"HTML",
		"CSS",
		"Flash"
	],
	age: 503423,
	sayHi: function () {
			console.log("Hi");
	}
};

var key = "age";

console.log( student[key] );
console.log( student["interests"] );
console.log( student.interests );


student.sayHi() ;

student.sayHi = function () {
	console.log("Get lost");
};

student["sayHi"]();

for (var key in student) {
	console.log("key: " + key + ", value: " + student [key]);
};


var handleData = function (json) {
	for (var i = 0; i < json.friends.length; i++) {
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " +
friend.age);
	};
};

var cargoHold = [];
var crew =[];
var cargoLoad = function (item) {
	if (item !== "elephants") {
		cargoHold.push(item);
	} else {
		console.log("Not allowed to load elephants!");
	}
};

var cargoList = function ()	{
	for (var n = 0; n < cargoHold.length; n++) {
		console.log(name + " cargo " + n + " : " +
			cargoHold[n] + ".");
		}

	}; 
	var getName = function () { return name; {
		return {  
		"name": getName,
		"cargoLoad": cargoLoad,
		"cargoList": cargoList
	};
};
var dauntless  = pirateShip("Dauntless");
duantless.cargoLoad("oranges");
duantless.cargoLoad("elephants");
duantless.cargoList();
console.log(dauntless.name()); //getter 
console.log(dauntless);

	

}



