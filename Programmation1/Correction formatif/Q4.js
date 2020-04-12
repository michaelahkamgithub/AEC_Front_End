class MonnaieVirtuelle {
    constructor(nomMonnaie,valeurEnUSD,actif){
        this.nomMonnaie=nomMonnaie;
        this.valeurEnUSD=valeurEnUSD;
        this.actif=actif;
        this.actifUSD=this.actif*this.valeurEnUSD;
    }
}
class Portefeuille{
    constructor(nomProprietaire,tableauMonnaies){
        this.nomProprietaire=nomProprietaire;
        this.tableauMonnaies=tableauMonnaies;
    }
    ValeurDuPortefeuille(){
        let valeur=0;
        for(let j=0;j<this.tableauMonnaies.length;j++){
            valeur+=(this.tableauMonnaies)[j].actifUSD
        }
        return valeur
    }
}
let monnaie1=new MonnaieVirtuelle("Bitcoin",9730,6);
let monnaie2=new MonnaieVirtuelle("Ethereum",194,20);
let monnaie3=new MonnaieVirtuelle("Litecoin",58,10);
let tab=[monnaie1,monnaie2,monnaie3];
let proprio=new Portefeuille("Shany Carle",tab);
document.write("La valeur du portefeuille de "+proprio.nomProprietaire+" est de "+proprio.ValeurDuPortefeuille()+"$ USD");

