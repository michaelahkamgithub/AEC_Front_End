var nomEtudiant;
var note1;
var note2;
var note3;
var noteFinal;


//Étape 2 : Lecture (demander à l'usager des données)
nomEtudiant = prompt("Entrer votre nom");
note1 = Number(prompt("Entrer votre note de mi-session (compte pour 30%) "));
note2 = Number(prompt("Entrer votre note de l'examen final (compte pour 50%) "));
note3 = Number(prompt("Entrer votre note des laboratoires (compte pour 20%) "));



//Étape 3 : Les calculs
noteFinal = (note1 * 30) / 100 + (note2 * 20) / 100 + (note3 * 50) / 100;

//Étape 4 : AFFICHE les résultats
alert("Nom de l'étudiant : " + nomEtudiant);
alert("Votre note de mi-session qui compte pour 30% est de : " + note1 + " sur 100");
alert("Votre note de l'examen final qui compte pour 50% est de : " + note2 + " sur 100");
alert("Votre note des laboratoires qui compte pour 20% est de : " + note3 + " sur 100");
alert("Votre note final est de : " + noteFinal + "%");


