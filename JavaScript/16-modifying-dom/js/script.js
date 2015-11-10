/*
Faire une boucle for qui additionne les notes du tableau et divisier le résultat par la taille du tableau
*/

var sum = 0;

var grades = [9, 12, 15, 18, 14];

var newNote = prompt("Quel est la nouvelle note à ajouter ?");

grades.push(parseInt(newNote));

for(var i = 0; i < grades.length; i++) {
	sum += grades[i];
};

var average = sum/grades.length;

//console.log("La moyenne de la classe est de " + sum/grades.length + " sur 20");

// Ajouter dynamiquement des balises dans le document HTML
document.write('<section><h1 id="title">La moyenne de la classe est de ' + average + ' sur 20</h1></section>');

document.write("<p>La note de vous avez ajoutée est : " + newNote + "</p>");
