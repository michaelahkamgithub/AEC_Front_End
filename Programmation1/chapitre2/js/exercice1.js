//Lire deux nombres et afficher le plus grand des deux.

var nb1;
var nb2;

nb1 = Number(prompt("Veuillez entrer un nombre svp : "));
nb2 = Number(prompt("Veuillez entrer un nombre svp : "));

if(nb1 >= nb2){
    document.write("Le nombre 1 est le plus grand: " + nb1)
}
else if(nb2>nb1){
    document.write("Le nombre 2 est le plus grand: " + nb2)
}
else{
    document.write("Les nombres sont égaux! ")
}
