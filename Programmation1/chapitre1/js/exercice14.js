var note1;
var note2;
var note3;
var noteFinal;


//Étape 2 : Lecture (demander à l'usager des données)
note1 = Number(prompt("Entrer votre note de mi-session "));
note2 = Number(prompt("Entrer votre note de l'examen final "));
note3 = Number(prompt("Entrer votre note des laboratoires "));



//Étape 3 : Les calculs
noteFinal = 
montantTotal = total1 + total2 + total3;
tps = montantTotal * 0.05;
tvq = montantTotal * 0.0998;
grandTotal = montantTotal + tps + tvq;
//Étape 4 : AFFICHE les résultats
alert("La date de la facture est le " + date + "," + " le montant avant taxes est de : " + montantTotal + "$ cad " + ","  + " la taxe TPS est de : " + tps + "$ cad" + " et la TVQ : " + tvq + "$ cad" + "." + " Le montant total est de " + grandTotal + "$ CAD");


