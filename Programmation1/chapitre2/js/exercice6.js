//Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

var nbre

nbre = Number(prompt("Veuillez entrer un nombre svp : "));


if(nbre >= 90){
    alert('A');
}
else if(nbre => 80 && nbre >= 89){
    alert('B');
}
else if(nbre => 70 && nbre >= 79){
    alert('C');
}
else if(nbre => 60 && nbre >= 69){
    alert('D');
}
else if(nbre < 60){
    alert('E');
}