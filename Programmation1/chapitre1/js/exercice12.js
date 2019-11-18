var date;
var total1;
var total2;
var total3;
var montantTotal;
var tps;
var tvq;
var grandTotal;

//Étape 2 : Lecture (demander à l'usager des données)
date = prompt("Entrer la date ");
total1 = Number(prompt("Entrer le montant de votre article "));
total2 = Number(prompt("Entrer le montant de votre article "));
total3 = Number(prompt("Entrer le montant de votre article "));



//Étape 3 : Les calculs
montantTotal = total1 + total2 + total3;
tps = montantTotal * 0.05;
tvq = montantTotal * 0.0998;
grandTotal = montantTotal + tps + tvq;
//Étape 4 : AFFICHE les résultats
alert("La date de la facture est le " + date + "," + " le montant avant taxes est de : " + montantTotal + "$ cad " + ","  + " la taxe TPS est de : " + tps + "$ cad" + " et la TVQ : " + tvq + "$ cad" + "." + " Le montant total est de " + grandTotal + "$ CAD");


