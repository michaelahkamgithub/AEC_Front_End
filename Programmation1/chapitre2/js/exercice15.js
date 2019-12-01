//15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var perimetre;
var surface;
var largeur;
var longueur;

longueur = Number(prompt("Entrer la longueur"));
largeur = Number(prompt("Entrer la largeur"));

perimetre = (largeur + longueur) * 2;

surface = (largeur * longueur);



if(perimetre >= 100 ){
    alert("La surface du rectangle est : " + surface + " cm2");
}

else{
    alert("Le rectangle est trop petit ");
}