//Calculer le prix des assurances pour un véhicule.
//Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
//S’il est plus vieux, le taux sera de 3 %.
//Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.


var prixAssurances;
var sexe;
var age;
var valeurVehicule;
var taux;

sexe = prompt("Entrez votre sexe : M ou F");
age = Number(prompt("Entrez votre age : "));
valeurVehicule = Number(prompt("Entrez la valeur de votre auto : "));

if(sexe.toUpperCase() === "M"){
    if(age >= 16 && age <= 25){
        taux = .05;
    }
    else if(age > 25){
        taux = .03;
    }
    else{
        alert("VOUS NE POUVEZ PAS CONDUIRE!!!!");
    }
    prixAssurances = valeurVehicule * taux;
    alert("Le prix des assurances est de : " + prixAssurances + " $ ");

}
else if(sexe.toUpperCase() === "F"){
    if(age >= 16 && age <= 25){
        taux = .03;
    }
    else if(age > 25){
        taux = .02;
    }
    else{
        alert("VOUS NE POUVEZ PAS CONDUIRE!!!!");
    }
    prixAssurances = valeurVehicule * taux;
    alert("Le prix des assurances est de : " + prixAssurances + " $ ");
}