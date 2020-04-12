class Activite{
    constructor(nom,cout){
        this.nom = nom;
        this.cout = cout;
    }
}

class Voyage{
    constructor(destination,prixBillet,tabActivite){
        this.destination = destination;
        this.prixBillet = prixBillet;
        this.tabActivite = tabActivite;
    }
    ValeurDuVoyage(){
        let valeur = 0;
        for(let i=0;i<this.tabActivite.length;i++){
            valeur+=( this.tabActivite)[i].cout;
        }
        return valeur;
    }
}

class personne{
    constructor(nom,voyage){
        this.nom = nom;
        this.voyage = voyage;
    }
}


let activite1 = new Activite("Golden knight hockey",125);
let activite2 = new Activite("Raiders football",200);
let activite3 = new Activite("Tournoi de poker",500);

let tab = [activite1,activite2,activite3];

let voyage1 = new Voyage("Las Vegas",400,tab);
let personne1 = new personne("Shany Carle",voyage1);

document.write("Nom :" + personne1.nom + " <br>");
document.write("Destination :" + voyage1.destination + " <br>");
document.write("Prix du billet :" + voyage1.prixBillet + " $ CAD" + "<br>");
document.write("Le voyage de " + personne1.nom + " va lui coûter un montant de : " + voyage1.ValeurDuVoyage()+ " $ CAD" + "<br>");
document.write("Le prix du billet d'avion incluant le prix des activités lui coûtera : " + (voyage1.prixBillet + voyage1.ValeurDuVoyage()+" $ CAD"));


