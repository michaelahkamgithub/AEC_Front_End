//Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid».
// Sinon, écrire « Enfin une belle journée! ».

var temp1;

temp1 = Number(prompt("Entrer la température "));


if(temp1 >= -40 && temp1 <= -10){
    alert('HAAAAAAA! Il fait froid');
}
else if(temp1 < -40){
    alert("C'est pas humain");
}
else{
    alert("Enfin une belle journée");
}



