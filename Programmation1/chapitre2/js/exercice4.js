//Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
// Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’,
// si ce nombre n’est pas zéro vous devez afficher le résultat.

var nombre1;
var nombre2;
var nbre;

nombre1 = Number(prompt("Entrer un nombre "));
nombre2 = Number(prompt("Entrer un nombre"));

nbre = nombre1 / nombre2;


if(nombre2 > 0){
    alert(nbre);
}
else{
    alert("Division par zéro interdite");
}