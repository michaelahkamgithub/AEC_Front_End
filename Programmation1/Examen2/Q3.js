let tabNombres=[];
let tabLettres=[];
let nbE=0;
let nbY=0;

for(let i=0;i<10000;i++){
    tabNombres.push(Math.floor(Math.random()*90)+65);
}
document.write(tabNombres + "<br>");

for(let j=0;j<tabNombres.length;j++){
    tabLettres.push(String.fromCharCode(tabNombres[j]));
}
document.write(tabLettres + "<br>");

for(let e=0;e<tabLettres.length;e++){
    if(tabLettres[e]=== "E"){
        nbE++
    }
}
document.write("Il y a "+ nbE + " lettres E" + "<br>");

for(let y=0;y<tabLettres.length;y++){
    if(tabLettres[y]=== "A" || tabLettres[y]=== "E" || tabLettres[y]=== "I" || tabLettres[y]=== "O" || tabLettres[y]=== "U" || tabLettres[y]=== "Y"){
        nbY++
    }
}
document.write("Il y a "+ nbY + " voyelles" + "<br>");
