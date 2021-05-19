//Déclaration d'une classe

class personnage {
    constructor (nom, prenom, age, parle) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.parle = parle;
        this.parler = (phrase) => {
            return phrase;
        }
    }
}

let chris = new personnage("DG", "chris", 27, "français"); // on appelle ça une instance de le classe "personnage"
let zinc = new personnage("DG", "Alan", 26, "néerlandais");

console.log(chris);
console.log(chris.parler('bien ou bien ?')); // je déclenche la méthode parler()

console.log(zinc);
console.log(zinc.parler('we zijn hier eh maat'));


// Propriété "Extend" -- classe parent/enfant

//classe parent
class Humain{
    constructor(nom,prenom,argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }
}
 
//classe enfant (qui extend (étend) la classe parent (humain))
// les classes enfants récupèrent via les extends les propriétés et les méthodes de la classe parent
//on déclare dans le constructor les propriétés dont on a besoin
//super permet de récupérer le constructor et les propriétés de la classe parent (Humain)
class Espagnol extends Humain{
    constructor(nom,prenom,argent,region,langue){
        super(nom,prenom,argent);
        this.region = region;
        this.langue = langue;
    }
}
//classe enfant (qui extend (étend) la classe parent (humain))
class Belge extends Humain{
    constructor(nom,prenom,argent, frites, gaufres){
        super(nom,prenom,argent)
        this.frites = frites;
        this.gaufres = gaufres;
    }
}
let jose = new Espagnol("caravaca", "jose", 2,"cadiz", "espagnol");
let jan = new Belge("jambon", "jan", 10000, "frites mayo", "gaufres de liege");
console.log(jose);
console.log(jan);

// importation et exportation de classe

import Personnes from"./classes.js";  // 
console.log(Personnes);