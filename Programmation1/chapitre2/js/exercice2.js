//Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

var montant=Number(prompt('Entrer votre montant:'));

if (montant >= 200){
    alert('Vous obtenez 15% de remise');
}
else{
    alert("Vous n'obtenez pas de rabais");
}