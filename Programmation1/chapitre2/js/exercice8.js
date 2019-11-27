//Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
//Une semaine de travail normale est de 40 heures.

var salaire;
var taux;
var tauxSupp;
var nbHeuresTravaillees = '40';

nbHeuresTravaillees = Number(prompt("Nombre d'heures travaillees : "));
taux = Number(prompt("Taux horaire? : "));

tauxSupp = (taux * 2);
salaire = nbHeuresTravaillees * taux;

if(nbHeuresTravaillees <= '40'){
    alert("Le salaire est " + salaire);
}
else if (nbHeuresTravaillees >= '40'){
    alert("Le salaire est " + (salaire + taux *2));
}