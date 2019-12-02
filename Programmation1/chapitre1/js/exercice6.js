//Faites un programme qui lit le nom d'un article et son prix de détail.
//Votre programme doit afficher le prix de gros 66% du prix de détail ainsi
//que le profit attendu.

//Étape 1 : trouver les variables

var nomArticle;
var prixDetail;
var prixGros;

//Étape 2 : Lecture (demander à l'usager des données)
nomArticle = prompt("Entrer nom de l'article ");
prixDetail = Number(prompt("Entrer le prix "));


//Étape 3 : Les calculs
prixGros = (prixDetail * 1.66) - prixDetail;

//Étape 4 : AFFICHE les résultats
alert("Le prix de gros est de " + prixGros + "$" + " et vous avez économiser " + (prixDetail - prixGros));
