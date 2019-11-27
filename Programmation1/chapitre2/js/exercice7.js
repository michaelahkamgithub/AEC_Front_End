//Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nombre;

nombre = Number(prompt("Entrer un nombre "));

if(nombre > 0){
    alert("Positif");
}
else if(nombre < 0){
    alert("Négatif");
}
else{
    alert("0");
}