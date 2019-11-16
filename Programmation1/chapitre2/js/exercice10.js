//Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var mois

mois = Number(prompt("Entrer un nombre "));


if(mois === 1){
    alert('Janvier');
}
else if(mois === 2){
    alert('Février');
}
else if(mois === 3){
    alert('Mars');
}
else if(mois === 4){
    alert('Avril');
}
else if(mois === 5){
    alert('Mai');
}
else if(mois === 6){
    alert('Juin');
}
else if(mois === 7){
    alert('Juillet');
}
else if(mois === 8){
    alert('Août');
}
else if(mois === 9){
    alert('Septembre');
}
else if(mois === 10){
    alert('Octobre');
}
else if(mois === 11){
    alert('Novembre');
}
else if(mois === 12){
    alert('Décembre');
}
else if(mois >= 13){
    alert('Mois invalide');
}

