var type;
var modeleVehicule;
var terme;
var choixTerme;
var couleur;
var choixCouleur;
var transmission;
var choixTransmission;
var prix = 0;
var grandTotal;
var taxes;
var prixMensuel;



type = prompt("Choisissez votre véhicule, A pour Sport ou B pour SportS ou C pour Havane,");
terme = prompt("Choisissez votre terme par mois : 24 ou 48 ou 60 ou 84");
couleur = prompt("Choisissez la couleur de votre voiture: R pour rouge ou V pour vert ou A pour autres,");
transmission = prompt("Choisissez la transmission de votre voiture: M pour manuelle ou A pour automatique ou C pour automatique 8 vitesses");


if(type.toUpperCase() === "A"){
    prix += 33290;
    modeleVehicule = "Vous avez choisie le modèle Sport";
}
else if(type.toUpperCase() === "B"){
    prix += 37240;
    modeleVehicule = "Vous avez choisie le modèle SportS";
}
else if(type.toUpperCase() === "C"){
    prix += 39235;
    modeleVehicule = "Vous avez choisie le modèle Havane";
}
else{
    modeleVehicule = (" Il y a une erreur, veuillez recommencer et bien choisir le modèle, ");
}

if(terme.toUpperCase() === "24"){
    choixTerme = " avec un paiement de 24 mois,";
}
else if(terme.toUpperCase() === "48"){
    choixTerme = " avec un paiement de 48 mois,";
}
else if(terme.toUpperCase() === "60"){
    choixTerme = " avec un paiement de 60 mois,";
}
else if(terme.toUpperCase() === "84"){
    choixTerme = " avec un paiement de 84 mois,";
}
else{
    choixTerme = (" choix de paiement non disponible, ");
}

if(couleur.toUpperCase() === "R"){
    prix += 1399;
    choixCouleur = " de couleur rouge,";
}
else if(couleur.toUpperCase() === "V"){
    prix += 1399;
    choixCouleur = " de couleur vert,";
}
else if(couleur.toUpperCase() === "A"){
    choixCouleur = " de couleur de disponible,";
}
else{
    choixCouleur = (" le choix de couleur n'est pas disponible, veuillez recommencer, ");
}
if(transmission.toUpperCase() === "M"){
    prix += 0;
    choixTransmission = " et avec transmission manuelle";
}
else if(transmission.toUpperCase() === "A"){
    prix += 1500;
    choixTransmission = " et avec transmission automatique";
}
else if(transmission.toUpperCase() === "C"){
    prix += 2400;
    choixTransmission = " et avec transmission auto 8 vitesses";
}
else{
    choixTransmission = (" Il y a une erreur sur le choix de transmission, veuillez recommencer, ");
}

taxes = prix * 0.15;
grandTotal = prix + taxes;
prixMensuel = prix / terme;

alert(" Le prix du véhicule incluant la taxe est de : " + grandTotal.toFixed(2) + " $");
alert("Le paiement mensuel incluant la taxe est de : " + prixMensuel.toFixed(2)+ "$" + " par mois");
alert(modeleVehicule + choixTerme + choixCouleur + choixTransmission);

