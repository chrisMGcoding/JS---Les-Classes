// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix

class objet {
    constructor (nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

let chaise = new objet("chaise", 10);
let table = new objet("table", 15);

let tab = [chaise, table];
console.log(tab);

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

class personnage {
    constructor (nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = () => {
            if (this.nom == "Chris") {
                sac.push(tab[0]);
                console.log(sac);
            } else {
                sac.push(tab[1]);
                console.log(sac);
            }
        }
        this.achat = () => {
            sac.push(alan.sac[0]);
            console.log(this.argent - chaise.prix);
        }
    }
}

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

let chris = new personnage("Chris", [], 25);
let alan = new personnage("Alan", [], 50);

chris.prendre();
alan.prendre();

chris.achat();