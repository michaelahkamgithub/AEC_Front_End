//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60
// et « Bravo » si la note est supérieure ou égale à 60.

var note;

note = Number(prompt("Entrer votre note"));

if(note >= 60){
    alert("Bravo");
}
else if(note <= 59){
    alert("Échec");
}