var tabRecensement = [0,0,0,0,0,0,0,0,0,0,0];
var nbEnfants = 0;
while(nbEnfants != "STOP"){
    nbEnfants = prompt("Combien avez-vous d'enfant(s), entrez 666 pour quitter");
    if(!isNaN(nbEnfants)){
        nbEnfants = Number(nbEnfants);
        //C'est un nombre, on le met en numbers et on continue le code
        //Le 30 est uniquement pour s’assurer que l’utilisateur n’entre pas un chiffre immense au niveau du nombre d’enfants
        if(nbEnfants>=0 && nbEnfants < 30){
            if(nbEnfants<10){
                tabRecensement[nbEnfants]++;
            }
            else{
                tabRecensement[10]++;
            }
        }
    }

}
for(var i=0;i<=10;i++){
    if(i!==10){
        document.write("Nombre de familles avec " + i + " enfants = " + tabRecensement[i] + "<br>");
    }
    else{
        document.write("Nombre de familles avec 10 enfants = " + tabRecensement[10] + "<br>");
    }
}
