var users = ["Frédérique", "Pascal", "Matthieu", "Julien"];
var newUser = prompt("Quel est ton prénom ?");

users.push(newUser);
console.log(users);

var removed = users.splice(1, 2, "Jacques", "Paul");
console.log(removed);
console.log(users);
