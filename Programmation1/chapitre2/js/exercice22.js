//22. Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var couleur;



couleur = prompt("Veuillez choisir un des 3 couleurs suivantes : Bleu, Jaune ou Rouge");

if(couleur.toUpperCase() === "BLEU"){
    document.write("<h1 class='Bleu'>Ceci est un exemple de couleur bleu</h1>");
}
else if(couleur.toUpperCase() === "ROUGE"){
    document.write("<h1 class='Rouge'>Ceci est un exemple de couleur Rouge</h1>");
}

else if(couleur.toUpperCase() === "JAUNE"){
    document.write("<h1 class='Jaune'>Ceci est un exemple de couleur Jaune</h1>");
}
else{
    document.write("<h1>La couleur n'existe pas</h1>");
}