
function getMysteryNumber(){
	var chooseMystery = function(){
		return 12;
	}
	return chooseMystery();
	
	var chooseMystery = function(){
		return 7;
	}
}

/*
	Loads like this
	
	function getMysteryNumber(){
		var chooseMystery = undefined;
		var chooseMystery = undefined;
		
		chooseMystery = function () {
			return 12;
		}
		
		return chooseMystery();
		
		//this code is unreachable!!
		chooseMystery = function (){
			return 7;
		}
	}
	
	getMysteryNumber(); = 12
	
*/