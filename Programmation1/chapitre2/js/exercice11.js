//.Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.

var lettre;

lettre = prompt("Entrer une lettre : ");

if(lettre.toUpperCase() === "W"){
    alert('Avancer');
}
else if(lettre.toUpperCase() === "A"){
    alert('Gauche');
}
else if(lettre.toUpperCase() === "S"){
    alert('Reculer');
}
else if(lettre.toUpperCase() === "D"){
    alert('Droite');
}
else{
    alert('ERREUR');
}

