var noteMoyenne;
var tabNoms = [];
var tabNotes = [];

for(i = 0; i < 5; i++){
    tabNoms[i] = prompt("Quel est votre nom?");
    tabNotes[i] = Number(prompt("Quelle note avez-vous obtenu?"));
}
//On pourrait calculer la moyenne dans la boucle du haut aussi et //ne faire que la division en sortant de la boucle
noteMoyenne = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4]) / 5;

for(i = 0; i < 5; i++) {
    if (tabNotes[i] > noteMoyenne){
        document.write(tabNoms[i] + tabNotes[i]);
    }
}
