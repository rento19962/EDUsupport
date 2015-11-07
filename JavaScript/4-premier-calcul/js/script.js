// Définition de l'année en cours
var currentYear = 2015;

// Trois questions sont posées à l’utilisateur
var firstName = prompt("Quel est ton prénom ?");
var lastName = prompt("Quel est ton nom ?");
var age = prompt("Quel est ton âge ?");

// Calcul de la date de naissance de l’utilisateur
var birthYear = currentYear - parseInt(age);

console.log("Bonjour " + firstName + " " + lastName + ", ton année de naissance est : " + birthYear);
