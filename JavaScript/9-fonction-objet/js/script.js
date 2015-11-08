var julien = {
	firstName: "Julien",
	lastName: "Noyer",

	// Ajout d’une fonction qui calcule le nom complet
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

console.log(julien.fullName());  // Affiche "Julien Noyer”
