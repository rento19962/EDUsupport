var userChoice = prompt("Quelle couleur voulez-vous traduire ?");

if(userChoice == "rouge") {
	console.log("Rouge se dit \"Red\" en anglais");
} else if(userChoice == "vert") {
	console.log("Vert se dit \"Green\" en anglais");
} else if(userChoice == "bleu") {
	console.log("Bleu se dit \"Blue\" en anglais");
} else if(userChoice == "jaune") {
	console.log("Jaune se dit \"Yellow\" en anglais");
} else {
	console.log("Je ne connais pas cette couleur...");
}
