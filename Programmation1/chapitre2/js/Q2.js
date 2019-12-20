var age;

age = Number(prompt("Veuillez entrer votre age svp : "));

if(age >= 0 && age <= 12 ){
    alert("Enfant");
}
else if(age <= 13 && age <= 17){
    alert("Adolescent");
}
else if(age >= 18 && age <=54){
    alert("Adulte");
}
else{
    alert("Pas encore né")
}