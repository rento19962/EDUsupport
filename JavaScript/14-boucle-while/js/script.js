
var grades = [9, 12, 15, 18, 17];

// Création de la boucle while
var i = 0, sum = 0;

while(i < grades.length){
	sum += grades[i];
	i++;
};

console.log("La moyenne de la classe est de " + sum / grades.length + "/20");
