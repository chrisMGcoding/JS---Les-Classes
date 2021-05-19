// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix

class Objet {
    constructor (nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

let chaise = new Objet("chaise", 10);
let table = new Objet("table", 15);

let boite = [chaise, table];
console.log(boite);

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

class Personnage{
    constructor (nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        // this.prendre = () => {
        //     if (this.nom == "Chris") {
        //         this.sac.push(tab[0]);
        //         console.log(this.sac);
        //     } else {
        //         this.sac.push(tab[1]);
        //         console.log(sac);
        //     }
        // }
        // this.achat = () => {
        //     sac.push(alan.sac[0]);
        //     console.log(this.argent - chaise.prix);
        // }
        this.prendre = (objet, boite) => {
            this.sac.push(objet);
            boite.splice(boite.indexOf(objet),1);
            console.log(`${this.nom} a mis ${objet.nom} dans son sac`);
            console.log(this.sac);
            console.log(boite);
        };
        this.acheter = (vendeur, objet) => {
            if (this.argent >= objet.prix) {
            this.argent -= objet.prix;
            vendeur.argent += objet.prix;
            this.sac.push(objet);
            vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
            console.log(`${this.nom} a acheté ${objet.nom} à ${vendeur.nom}`)
            } else {
                console.log("you're poor !");
            }
        }
    }
}

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

let chris = new Personnage("Chris", [], 25);
let alan = new Personnage("Alan", [], 50);

chris.prendre(chaise, boite);
alan.prendre(table, boite);

chris.acheter(alan, table);
