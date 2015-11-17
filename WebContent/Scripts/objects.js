//creating an object with JavaScript

//var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"];
//var myBox = {height: 6, width: 8, length: 10, volume: 480,
//		material: "cardboard", contents: booksArray, "# of Books": 0
//		};
//
//myBox.width; //= 8
//myBox.materials; //= "Cardboard"
//myBox.contents; //= ["Great Expectations", ...]
//
//myBox.width = 12;
//console.log(myBox.width);
//
//myBox.volume = myBox.length * myBox.width * myBox.height;
//console.log(myBox.volume);
//
//myBox.contents.push("On The Road");
//
//myBox.weight = 24; //JavaScript will add the 'weight' property to the object!
//
////the brackets method
//myBox["volume"]; //= 720
//myBox["material"]; //= "Cardboard"
//
////Since the brackets use an exactly matching string, we can also create 
////properties with spaces and characters in their names.
//myBox["# of stops"] = 2;
//
////however...
////console.log(myBox."# of stops"); //will give an error!!
//
////but using brackets...
//console.log (myBox["# of stops"]); //is OK
//
//for (var i = 1; i <= myBox["# of stops"]; i++){
//	console.log(myBox["destination" + 1]);
//}
//
////the delete keyword will completely delete the entire contents property 
////NOT just the associated value
//delete myBox.contents; // returns true
//
//function addBook(box, name, writer){
//	box["# of Books"]++;
//	box["book" + box["# of Books"]] = {title: name, author: writer};
//	
//}
//
//addBook(myBox, "Great Expectations", "Charles Dickens");
//
//console.log(myBox.book1.title); //= "Great Expectations"
//console.log(myBox["book1"]["author"]); //= "Charles Dickens"

var superBlinders = [["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000]];

var lighthouseRock = {
		gateClosed: true,
		weaponBulbs: superBlinders,
		capacity: 30,
		secretPassageTo: "Underwater Outpost",
		numRangers: 3,
		ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
		ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
		ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location){
	var list = "Avast, me hearties!\n" + "There be pirates nearby! Stations!\n";
	
	//loop through the ranges and append to list
	for (var i = 1; i <= location.numRangers; i++){
		list += location["ranger" + i].name + ", man the " + 
			location.weaponBulbs[location["ranger" + 1].station -1][0] + "!\n";
	}
	
	alert(list);
}

dontPanic(lighthouseRock);
