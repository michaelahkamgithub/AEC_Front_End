let tabChance=[];
let nbFois=0;

for(let i=0;i<100;i++){
    tabChance.push(Math.floor(Math.random() * 200) + 1);
}
let nbUser=Number(prompt("Un nombre entre 1 et 200"));
for(let i=0;i<tabChance.length;i++){
    if(tabChance[i]===nbUser){
        nbFois++
    }
}
if(nbFois!==0){
    alert("Oui, il y a "+nbFois+" fois le nombre "+nbUser)
}
else if(nbFois===0){
    alert("Non, il n'y a pas le nombre "+nbUser+" dans le tableau")
}



