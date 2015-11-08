var grades = [9, 12, 15, 18, 17];

var globalNote = grades[0] + grades[1] + grades[2] +grades[3] + grades[4];
var rate = globalNote / grades.length;

console.log(rate);

var newNote = prompt("Quelle note sur 20 voulez-vous ajouter ?");
grades.push(parseInt(newNote));

console.log(grades);
