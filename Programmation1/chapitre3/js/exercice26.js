//Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. Le joueur doit ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée entre les deux premières cartes. S’il remporte son pari, il gagne la partie, sinon il perd.
// Nous proposerons ici une version quelque peu modifiée du jeu. Pour rendre les paris plus intéressants, le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes).
// Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il doit ensuite demander à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, le nombre de prédictions remportées est affiché.

var carte1,carte2,carte3;
var nbPrediction = 0;
var prediction;
var gagner = true;

while (gagner){
    carte1 = Math.floor(Math.random() * 13 + 1);
    carte2 = Math.floor(Math.random() * 13 + 1);

    prediction = prompt("Carte 1 = " + carte2 + " \nCarte 2 = " + carte1 + "\nE pour Entre\nN pour Non");
    prediction = prediction.toUpperCase();
    carte3 = Math.floor(Math.random() * 13 + 1);
    document.write("La 3e carte est " + carte3 + "<br>");


    if((carte3 > carte1 && carte3 < carte2) || (carte3 < carte1 && carte3 > carte2)){
        if(prediction === "E"){
            document.write("Gagné<br>");
            nbPrediction++;
        }
        else{
            document.write("Perdu<br>");
            gagner = false;
        }

    }
    else{
        if(prediction === "N"){
            document.write("Gagné<br>");
            nbPrediction++;
        }
        else{
            document.write("Perdu<br>");
            gagner = false;
        }
    }
    document.write(nbPrediction + " bonnes predictions");

}
