let pokemon;
let attaque;
let attaque1;
let attaque2;
let nbAleatoire = ["Face","Pile"];

pokemon = prompt("Veuillez entrer le type de pokemon : Feu ou Eau ou Glace ou Acier ou Roche ou Sol ou Électrick");

for(var i=0;i<nbAleatoire.length;i++){
    nbAleatoire = Math.floor(Math.random()*2);
    if(pokemon.toUpperCase() === "EAU"){
        attaque = 100*2;
        alert("type = " + pokemon + " " + attaque + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "FEU"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "GLACE"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "ACIER"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "ROCHE"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "SOL"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else if(pokemon.toUpperCase() === "ÉLECTRICK"){
        attaque1 = 100;
        alert("type = " + pokemon + " " + attaque1 + " de dégâts");
    }
    else{
        attaque2 = 0;
        alert("type = " + pokemon + " " + attaque2 + " de dégâts");
    }
}







