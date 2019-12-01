// 13. Lire 2 nombres A et B  différents. Trouver et afficher le plus petit et le plus grand.

var A, B;
A = Number(prompt("Entrez le nombre A"));
B = Number(prompt("Entrez le nombre B (différent de A)"));


if (A < B){
    alert("A est plus petit " + A + " et B est plus grand " + B);
}
else if(B < A){
    alert("B est plus petit " + B + " et A est plus grand " + A);
}
else{
    alert("Vous avez entré des nombres égaux ou pas des nombres");
}
