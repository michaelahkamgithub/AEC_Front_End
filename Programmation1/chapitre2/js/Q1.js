var nbrePers;
var prixBillet;
var rabais;
var prixTotal;

nbrePers = Number(prompt("Veuillez entrer le nombre de personne svp ;"));

prixBillet = nbrePers * 50;

if(nbrePers >= 1 && nbrePers <= 9){
    alert("Le prix total est de " + prixBillet + " $")
}
else if(nbrePers >= 10 && nbrePers <= 19){
    prixBillet = nbrePers * 50;
    rabais = prixBillet * 0.05;
    prixTotal = prixBillet - rabais;
    alert("Le prix total incluant 5% de rabais est de " + prixTotal + " $")
}
else if(nbrePers >= 20 && nbrePers <= 29){
    prixBillet = nbrePers * 50;
    rabais = prixBillet * 0.1;
    prixTotal = prixBillet - rabais;
    alert("Le prix total incluant 10% de rabais est de " + prixTotal + " $")
}
else if(nbrePers >= 30 && nbrePers <= 39){
    prixBillet = nbrePers * 50;
    rabais = prixBillet * 0.15;
    prixTotal = prixBillet - rabais;
    alert("Le prix total incluant 15% de rabais est de " + prixTotal + " $")
}
else if(nbrePers >= 40){
    prixBillet = nbrePers * 50;
    rabais = prixBillet * 0.2;
    prixTotal = prixBillet - rabais;
    alert("Le prix total incluant 20% de rabais est de " + prixTotal + " $")
}
else{
    alert("Veuillez recommencer");
}