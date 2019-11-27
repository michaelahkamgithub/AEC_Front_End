//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.


var lettre;

lettre = prompt("Entrer la lettre svp : ");

if(lettre.toUpperCase() === "A" && "E" && "I" && "O" && "U" && "Y"){
    alert("Voyelle");
}
else{
    alert("Consonne");
}