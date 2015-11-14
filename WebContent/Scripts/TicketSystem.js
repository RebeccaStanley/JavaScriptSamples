var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55]
					["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];

var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers","Pines Plunge"];

// shift removes the first item from the array
//var firstFastPass = fastPassQueue.shift();

var wantsRide = "Birch Bumpers";
//var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);

//To call the function contained in the ticket variable, we need a set
//of parentheses and a semicolon
//ticket();

//BUT! you can build the ticket without using the ticket variable!!
buildTicket(parkRides, fastPassQueue, wantsRide)();

/**
 * @param allRides: the array of the rides and their wait times
 * @param passRides: the next fast pass rides, in order
 * @param pick: the actual ride for which the customer would like a ticket
 */
function buildTicket (allRides, passRides, pick){
	if (passRides[0] == pick){
		var pass = passRides.shift();
		return function(){alert("Quick! You've got a Fast Pass to " + pass + "!");
		};
		
	}else{
		for (var i = 0; i < allRides.length; i++){
			if (allRides[i][0] == pick){
				return function (){alert("A ticket is printing for " + pick + "!\n" +
						"Your wait time is about " + allRides[i][1] + " minutes.");
				};
			}
		}
	}

}