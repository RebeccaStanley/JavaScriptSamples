/**
 * 
 */

var trainsOperational = 8;
var totalTrains = 12;
var trainNumber = 1;

var passengerList = [];
passengerList = addPassenger("Gregg Pollack", passengerList);
passengerList = addPassenger("Annie Lacasse", passengerList);
passengerList = addPassenger("Textie windk", passengerList);

passengerList = deletePassenger("Annie Lacasse", passengerList);
passengerList = deletePassenger("Annie Lacasse", passengerList);


//while (trainNumber <= trainsOperational){
//	console.log("Train #" + trainNumber + " is running.");
//	trainNumber++;
//}
//
//for (trainNumber; trainNumber < totalTrains; trainNumber++){
//	console.log("Train #" + trainNumber + " has crashed!!");
//
//}

//var gotName = false;
//while (gotName == false){
//	var userName = prompt("Yo passenger! What's your name?");
//	if (confirm("Are you sure your name is " + userName + "?")){
//		alert("'Sup " + userName + "!");
//		gotName = true;	
//	}
//}

function sumOfCubes(a, b){
	return a * a * a + b * b * b;
}

function addPassenger(name, list){
	if (list.length == 0){
		//push the first passenger name
		list.push(name);
		return list;
	}else{
		for (var i = 0; i < list.length; i++){
			if (list[i] == undefined){
				//spot isn't filled, place the passenger
				list[i] = name;
				return list;
			}else if (i == list.length - 1){
				//end of the list, place the passenger into a new spot
				list.push(name);
				return list;
			}
		}
	}
}

function deletePassenger(name, list){
	if (list.length == 0){
		console.log("List is empty!");
	}else{
		for (var i = 0; i < list.length; i++){
			if (list[i] == name){
				list[i] = undefined;
				return list;
			}else if (i == list.length - 1){
				console.log("Passenger not found!");
			}
		}
	}
	return list;
}

function numStrings(list){
	var count = 0;
	
	for (var i = 0; i < list.length; i++){
		if (typeof(list[i] == "string")){
			count++;
		}
		
	}
	return count;
}

diff(4, 2);
//an anonymous function!
var diff = function (a, b){
	return a*a - b*b;
};

//the array.map method
var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

/*
var results = numbers.map(coolFunction);

replaces
var results = [];
for (var i = 0; i < numbers.length; i++){
	results[i] = coolFunction (numbers[i]);
}
*/


var results = numbers.map(function (arrayCell){
							return arrayCell * 2;
						}
);

//this is an acceptable way to instantiate arrays!
var puzzlers = [function(a){return 3 * a - 8;},
                function (a){return (a + 2) * (a + 2) * (a + 2);},
                function (a) {return a * a - 8;},
                function (a) {return a % 4;}
                ];

