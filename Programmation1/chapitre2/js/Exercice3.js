//Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

var nbre1;
var nbre2;

nbre1 = Number(prompt("Veuillez entrer un nombre svp : "));
nbre2 = Number(prompt("Veuillez entrer un nombre svp : "));

if(nbre1 + nbre2 >9){
    alert('BONJOUR');
}
else{
    alert("BONSOIR");
}
