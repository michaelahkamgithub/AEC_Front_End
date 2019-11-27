//Lire l’âge d’un individu et afficher le mot

var age;

age = Number(prompt("Entrer votre age : "));

if(age >= 18){
    alert("Adulte");
}
else if(age >= 12 && age <= 17){
    alert("Adolescent");
}
else if(age < 12){
    alert("Enfant");
}