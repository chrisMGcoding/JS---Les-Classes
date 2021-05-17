// ## EXO1
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

class lieux {
    constructor (nom, contenu, ingredient) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingredient = ingredient;
    }
}

let maison = new lieux("maison", [],);
console.log(maison);

let epicerie = new lieux ("épicerie", [], []);
console.log(epicerie);

let cuisine = new lieux ("cuisine", [], []);
console.log(cuisine);

// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

class ingredients {
    constructor (nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new ingredients ("poivron", "entier", 1);
console.log(poivron);

let oignons = new ingredients ("oignons", "entier", 2);
console.log(oignons);

let oeufs = new ingredients ("oeufs", "entier", 4);
console.log(oeufs);

let epice = new ingredients ("epice", "moulûe", 3.25);
console.log(epice);

let paprika = new ingredients ("paprika", "moulû", 1.5);
console.log(paprika);

let fromage = new ingredients ("fromage", "coupé", 1.6);
console.log(fromage);

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

class personne {
    constructor (nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.apnier = panier;
        this.se_deplacer = () => {
            document.write("Let's move");
        }
        this.payer = () => {
            document.write("ça raque");
        }
        this.couper = () => {
            document.write("ça cut")
        }
    }
}

let maxime = new personne ("Maxime", "néant", 100, []);

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }
