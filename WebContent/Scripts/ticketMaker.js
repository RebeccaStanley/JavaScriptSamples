//closure functions can modify bound variables in the background
/*
function buildCoveTicketMaker(transport){
	var passengerNumber = 0;
	return function (name){
		passengerNumber++;
		alert("Here is your transportation ticket via the " + transport + 
				".\n" + "Welcome to the Cold Closures Colve, " + 
				name + "!" + "You are passenger #" + passengerNumber + ".");
	}
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario");
*/

/**
 * Torpedo assigner for the Cove's Submarine to demonstrate that
 * closures bind values at the very last moment.
 * We have to pay close attention to return times and final variable states.
 * @param name
 * @param passengerArray
 */
/*
function assignTorpedo(name, passengerArray){
	//var torpedoAssignment;
	for (var i = 0; i < passengerArray.length; i++){
		if (passengerArray[i] == name){
			//The name variable and the loop counter i are closed up 
			//A person is assigned to the torpedo associated with their
			//index value in the list.
			return function(){
				alert("Ahoy, " + name + "!\n" + 
						"Man your post at Torpedo #" + (i + 1) + "!");
			};
		}
	}
	//return torpedoAssignment;
}


var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();
*/

function makeTorpedoAssigner(passengerArray){
	return function(name){
		//passengerArray is bound into the closure because parameters are part
		//of the environment too!
		for (var i = 0; i < passengerArray.length; i++){
			if (passengerArray[i] == name){
				alert("Ahoy, " + name + "!\n" + 
						"Man your post at Torpedo #" + (i + 1) + "!");
			}
		}
	
	};
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3P0", "Boba"];

var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("R2-D2");