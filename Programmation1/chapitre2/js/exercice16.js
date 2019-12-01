//16. Lire 2 nombres au clavier.
//Si ces 2 nombres sont :
//supérieurs ou égaux à 10, affichez leur somme
//inférieurs à 10, affichez leur produit
//Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

var nbre1;
var nbre2;
var produit;
var sommes;
var difference;


nbre1 = Number(prompt("Entrer un nombre"));
nbre2 = Number(prompt("Entrer un 2eme nombre"));

produit = nbre1 * nbre2;
sommes = nbre1 + nbre2;
difference = nbre1 - nbre2;


if(nbre1 >= 10  && nbre2 >= 10){
    alert("La somme est  : " + sommes);
}
else if (nbre1 <= 10  && nbre2 <= 10){
    alert("Le produit est  : " + produit);
}
else {
    alert("La différence est  : " + difference);
}