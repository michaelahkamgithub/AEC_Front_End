//Question 5

// Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot et d’afficher sa position.
// Pour faire ce choix, utilisez la table  suivante : position à afficher angle
//
// Main fermée	              0 <= angle <= 39
// Main agrippe		         40 <= angle <= 89
// Main ouverte		         90 <= angle <= 180
//
// Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.

/*
var angle;

angle = Number(prompt("Entrer votre angle"));

if(angle >= 0 && angle <= 39){
    alert('Main fermée');
}
else if(angle >= 40 && angle <= 89){
    alert('Main agrippe');
}
else if(angle >= 90 && angle <= 180){
    alert('Main ouverte');
}

else{
    alert("Le robot est hors de contrôle");
}

*/





//Question 2

//Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
//
// 100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.
//
// Écrire un algorithme le code qui permet de :
//
// Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.


/*
var point;

point = Number(prompt("Entrer vos points de vies "));

if(point <= 59){
    alert("100 points de dommages!");
}
else if(point >= 60 && point <= 79){
    alert("150 points de dommages!");
}
else if(point >= 80 && point <= 99){
    alert("200 points de dommages!");
}
else{
    alert("250 points de dommages!");
}
*/


//Question 6


var controleur;
var moteur;
var cameraUsb;
var matriceLeds;
var prixControleur;
var prixfilament = 20;
var prixbatterie = 15;



controleur = prompt("Sélectionner votre contrôleur entre un RaspBerry Pi ou un Raspberry Pi Zero?");
moteur = Number(prompt("Entrez le nombre de moteurs (entre 2 et 24)"));
cameraUsb = prompt("Voulez-vous une camera USB ? OUI ou NON");
matriceLeds = prompt("Voulez-vous une matrice de LEDS ? OUI ou NON");

if(controleur.toUpperCase() === "RaspBerry Pi"){
    prixControleur = 55;
}
    else if(controleur.toUpperCase() === "Raspberry Pi Zero"){
    prixControleur = 15;
}

if(moteur.toUpperCase())





