//Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12%
// et n’est calculé que sur les montants supérieurs ou égaux à $500.00.


var montant;
var escompte;

montant = Number(prompt("Entrer votre montant : "));

escompte = montant * 0.12;

if(montant <= 500){
    alert("Le montant est de : " + montant);
}
else if(montant > 500){
    alert("Le montant est de : " + montant + "$" + " et vous devriez un escompte de " + escompte + "$");
}