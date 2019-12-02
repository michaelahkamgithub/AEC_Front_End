var prixBase;
var prixVente;
var sousTotal
var frais;
var profit;
var tps;
var tvq;

prixBase = Number(prompt("Le prix de base est de "));

frais = 0.02 * prixBase;
profit = 0.12 * prixBase;

sousTotal = prixBase + frais + profit;

tps = 0.05 * sousTotal;
tvq = 0.09975 * sousTotal;

prixVente = prixBase + frais + profit + tps + tvq;


alert(" Le montant des frais est de " + frais + " $");
alert(" Le montant de la commission est de " + profit + " $");
alert(" Le montant de la tps est de " + tps + " $");
alert(" Le montant de la tvq est de " + tvq + " $");
alert(" Le montant total est de " + prixVente + " $");