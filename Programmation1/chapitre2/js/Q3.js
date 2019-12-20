var pizza;
var choixPizza;
var legumes;
var choixLegumes;
var pepperoni;
var choixPepperoni;
var sauce;
var choixSauce;
var prix = 0;
var tps;
var tvq;
var grandTotal;



pizza = prompt("Pizza fromage oui ou non?");
legumes = prompt("Voulez-vous ajouter des légumes oui ou non");
pepperoni = prompt("Voulez-vous ajouter des pepperoni oui ou non");
sauce = prompt("Voulez-vous ajouter de la sauce oui ou non");


if(pizza.toUpperCase() === "OUI"){
    prix += 10;
    choixPizza = "Pizza au fromage";
}
else{
    choixPizza = "Pizza végétarien";
}
if(legumes.toUpperCase() === "OUI"){
    prix += 5;
    choixLegumes = " avec des légumes par dessus,";
}
else{
    choixLegumes = " sans légumes,";
}

if(pepperoni.toUpperCase() === "OUI"){
    prix += 8;
    choixPepperoni = " et de la pepperoni,";
}
else{
    choixPepperoni = " sans pepperoni,";
}
if(sauce.toUpperCase() === "OUI"){
    prix += 1;
    choixSauce = " mélanger avec de la sauce piquante.";
}
else{
    choixSauce = " sans sauce.";
}

tps = prix * 0.05;
tvq = prix * 0.0998;
grandTotal = prix + tps + +tvq;

alert(choixPizza + choixLegumes + choixPepperoni + choixSauce);
alert(" Le prix de la pizza est de : " + prix + " $");
alert(" Le TPS est de : " + tps.toFixed(2) + " $" + " et la TVQ est de : " + tvq.toFixed(2) + " $");
alert(" Le montant total incluant la taxe est de : " + grandTotal.toFixed(2));
