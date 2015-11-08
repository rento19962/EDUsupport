function Users(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Users.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

var julien = new Users("Julien", "Noyer");
var chuck = new Users("Chuck", "Norris");

console.log(julien.fullName());  // Affiche “Julien Noyer”
console.log(chuck.fullName());  // Affiche “Chuck Norris”
