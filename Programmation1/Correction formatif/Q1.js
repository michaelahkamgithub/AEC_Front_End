let type=prompt("Type du pokemon adverse");
let degats=0;
let hasard= 0;

//Deux pile ou face
for(let i =0;i<2;i++){
    hasard = Math.floor((Math.random()*2));
    if(hasard === 1){
        document.write("face<br>");
        degats+=100;
    }
    else{
        document.write("pile<br>");
    }
}


if(type==="eau"){
    degats*=2;
}


document.write(degats+" de dégats");

