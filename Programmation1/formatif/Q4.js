class MonnaieVirtuelle{
    constructor(nomMonnaie,valeurEnUSD,actif){
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
    }
    actifUSD(){
        return(this.actif*this.actifUSD)
    }
}

let Bitcoin = new MonnaieVirtuelle("Bitcoin",9730,"vous-avez 2 Bitcoins");
console.log(Bitcoin);


class Portefeuille{
    constructor(nomProprietaire,tableauMonnaies){
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }
    ValeurDuPortefeuille(){
        let GrandTotal = 0;
        for(let i=0;i<this.tableauMonnaies.length;i++){
            GrandTotal +=this.tableauMonnaies[i].actifUSD();
        }
        return GrandTotal;
    }
}


let nomMonnaie = new MonnaieVirtuelle("Bitcoin",9730,6);
let nomMonnaie1 = new MonnaieVirtuelle("Ethereum",194,20);
let nomMonnaie2 = new MonnaieVirtuelle("Litecoin",58,10);

