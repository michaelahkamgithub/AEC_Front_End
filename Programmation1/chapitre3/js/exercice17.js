//Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
// Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F. De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

var nbGarcons = 0;
var nbFilles =0;
var sexe = "M";

while(sexe === "M" || sexe === "F"){
    sexe = prompt("Entrez votre sexe M ou F").toUpperCase();
    if(sexe ==="M"){
        nbGarcons++;
        document.write("GARCON<br>")
    }
    else if(sexe ==="F"){
        nbFilles++;
        document.write("FILLE<br>")
    }
}

document.write("Il y a  : " + nbGarcons + " gars");
document.write("Il y a  : " + nbFilles + " filles");
