

/**
 * An example of a simple closure
 * @returns {Function}
 */
/*
function testClosure(){
	var x = 4;
	
	function closeX(){
		//NOTE: x is not "stored" anywhere in closeX, not 
		//even as a parameter
		return x;
	}
	return closeX;
}

var checkLocalX = testClosure();
//this would return 4
//checkLocalX();

//closures make the creation of very similar function very efficient.


/**
 * makes a ticket maker for different modes of transportation
 * @param transport
 * @returns {Function}
 */
/*
function buildCoveTicketMaker(transport){
	return function(name){
		alert("Here is your transportation ticket via the " + transport + ".\n" +
				"Welcome to the Cold Closures Cove, " + name + "!");
	}
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

getSubmarineTicket("Mario");
getBattleShipTicket("Luigi");
getGiantSeagullTicket("Bowser");
*/


function mystery(input){
	var secret = 4;
	input += 2;
	function mystery2(multiplier){
		multiplier *= input;
		return secret * multiplier;
	}
	return mystery2;
}

function mystery3(param){
	function mystery4(bonus){
		return param(6) + bonus;
	}
	return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

alert(result);