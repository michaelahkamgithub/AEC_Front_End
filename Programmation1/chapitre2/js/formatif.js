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
var controleurTexte;
var nbMoteurs;
var nbMoteursTexte;
var camera;
var cameraTexte;
var matriceLed;
var matriceLedTexte;
var prix = 0;
var prixLivraison = 0;

controleur = prompt("Pi ou PiZero?");
nbMoteurs = Number(prompt("Entrez le nombre de moteurs (2-24)"));
camera = prompt("camera USB oui ou non");
matriceLed = prompt("Matrice LED oui ou non");

if(controleur.toUpperCase() === "PI"){
    prix+=55;
    controleurTexte = "Robot avec Raspberry Pi ";
}
else if(controleur.toUpperCase() === "PIZERO") {
    prix+=15;
    controleurTexte = "Robot avec Raspberry Pi Zero ";
}
else{
    controleurTexte = "Erreur de contrôleur ";
}

if(nbMoteurs>=2 && nbMoteurs <=24){
    prix+= (nbMoteurs*5);
    nbMoteursTexte = nbMoteurs + " moteurs ";
}
else{
    nbMoteursTexte = "Erreur dans les moteurs ";
}

if(camera.toUpperCase() ==="OUI"){
    prix+=35;
    cameraTexte = " avec caméra USB ";
}
else{
    cameraTexte = " sans caméra USB ";
}

if(matriceLed.toUpperCase() === "OUI "){
    prix+=10;
    matriceLedTexte = "avec matrice de LEDS ";
}
else{
    matriceLedTexte = "sans matrice de LEDS ";
}

prix+=35; // On ajoute le filament et la batterie

prixLivraison = prix * 1.15;

document.write(controleurTexte + nbMoteursTexte + cameraTexte + matriceLedTexte);
document.write("Le prix est de : " + prix);
document.write("Le prix avec la livraison est de " + prixLivraison);







