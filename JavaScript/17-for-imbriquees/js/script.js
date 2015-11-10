var firstName = ["John", "Paul", "Georges", "Ringo"];
var lastName = ["Lennon", "McCartney", "Harrison", "Staar"];

for( var i=0; i < firstName.length; i++) {
	var selectedName = firstName[i];
	document.write("<h1> Le prénom sélectionné est " + selectedName + "</h1>");

	// Boucle for imbriquée dans une première boucle
	for( var j = 0; j < lastName.length; j++){
		var selectedLastName = lastName[j];
		document.write("<p>" + selectedName + " " + selectedLastName + "</p>");
	};
};
