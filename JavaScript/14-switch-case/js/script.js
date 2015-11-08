var userChoice = prompt("Quelle couleur voulez-vous traduire ?");

switch(userChoice.toLowerCase()) {
	case "rouge":
	console.log("Rouge ce dit \"Red\" en anglais");
	break;

	case "vert":
	console.log("Vert ce dit \"Green\" en anglais");
	break;

	default:
	console.log("Je ne connais pas cette couleur..");
	break;
}
