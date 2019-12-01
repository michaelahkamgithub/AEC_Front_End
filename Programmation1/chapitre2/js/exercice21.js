//21. Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var impot;
var revenu;

revenu = Number(prompt("Entrer votre revenu"));

if (revenu > 0 && revenu <= 7000 ){
    impot = revenu * 0.16;
    alert("L'impôt provincial est de : " + impot.toFixed(2) + " $");
}
else if (revenu > 7000 && revenu <= 14000 ){
    impot = (revenu + 1120) * 0.195;
    alert("L'impôt provincial est de : " + impot.toFixed(2) + " $");
}
else if (revenu > 14000 && revenu <= 23000 ){
    impot = (revenu + 2485) * 0.215;
    alert("impôt provincial : " + impot.toFixed(2) + " $");
}
else if (revenu > 23000 && revenu <= 50000 ){
    impot = (revenu + 4420) * 0.245;
    alert("impôt provincial : " + impot.toFixed(2) + " $");
}
else if (revenu > 50000){
    impot = (revenu + 11035) * 0.245;
    alert("impôt provincial : " + impot.toFixed(2) + " $");
}
else {
    alert("Vous-avez un erreur");
}