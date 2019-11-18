var note1;
var note2;
var note3;
var noteFinal;


//Étape 2 : Lecture (demander à l'usager des données)
note1 = Number(prompt("Entrer votre note de mi-session "));
note2 = Number(prompt("Entrer votre note de l'examen final "));
note3 = Number(prompt("Entrer votre note des laboratoires "));



//Étape 3 : Les calculs
noteFinal = (note1 * 30) / 100 + (note2 * 20) / 100 + (note3 * 50) / 100;

//Étape 4 : AFFICHE les résultats
alert("Votre note final est de : " + noteFinal + "%");


