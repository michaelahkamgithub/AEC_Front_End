// 14. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var A, B, C;
A = Number(prompt("Entrez le nombre A"));
B = Number(prompt("Entrez le nombre B (différent de A et C)"));
C = Number(prompt("Entrez le nombre C (différent de A et B)"));


if (A < B && A < C){ //A est le plus petit
    if(B > C){
        alert("A est le plus petit " + A + " et B est le plus grand " + B);
    }
    else if(C > B){
        alert("A est le plus petit " + A + " et C est le plus grand " + C);
    }
    else{
        alert("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if( B < A && B < C){ //B est le plus petit
    if(A > C){
        alert("B est le plus petit " + B + " et A est le plus grand " + A);
    }
    else if(C > A){
        alert("B est le plus petit :" + B + " et C est le plus grand " + C);
    }
    else{
        alert("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if(C < A && C < B){ //C est le plus petit
    if(A > B){
        alert("C est le plus petit " + C + " et A est le plus grand " + A);
    }
    else if(B > A){
        alert("C est le plus petit :" + C + " et B est le plus grand " + B);
    }
    else{
        alert("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else{
    alert("Vous avez entré des nombres égaux ou pas des nombres");
}