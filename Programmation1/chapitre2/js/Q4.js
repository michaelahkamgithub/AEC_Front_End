var forme;
var aireCercle;
var airO;
var aireRectangleLongueur;
var aireRectangleLargeur;
var airR;
var aireTriangleBase;
var aireTriangleHauteur;
var airT;
var aireCarre;
var airC;

forme = prompt("Choisissez la forme : O pour cercle ou R pour rectancle ou T pour triangle ou C pour carré");
{
    if (forme.toUpperCase() === "O") {
        aireCercle = Number(prompt("Entrer le rayon du cercle :"));
        airO = (aireCercle * aireCercle) * 3.14;
        alert("L'aire du cercle est de : " + airO + " cm2");
    } else if (forme.toUpperCase() === "R") {
        aireRectangleLongueur = Number(prompt("Entrer la longueur du rectangle :"));
        aireRectangleLargeur = Number(prompt("Entrer la largeur du rectangle :"));
        airR = aireRectangleLongueur * aireRectangleLargeur;
        alert("L'aire du rectangle est de : " + airR + " cm2");
    } else if (forme.toUpperCase() === "T") {
        aireTriangleBase = Number(prompt("Entrer la longueur de la base du triangle :"));
        aireTriangleHauteur = Number(prompt("Entrer la hauteur du triangle :"));
        airT = (aireTriangleBase * aireTriangleHauteur) / 2;
        alert("L'aire du triangle est de : " + airT + " cm2");
    } else if (forme.toUpperCase() === "C") {
        aireCarre = Number(prompt("Entrer la longueur du côté du carré :"));
        airC = aireCarre * aireCarre;
        alert("L'aire du carré est de : " + airC + " cm2");
    } else {
        alert("Veuillez recommencer svp, il y a une erreur de frappe!");
    }
}