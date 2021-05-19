// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de[Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer()(qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus


// création class Lieu + instanciations
class Lieu {
    constructor (nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

let Molengeek = new Lieu("MolenGeek", []);
console.log(Molengeek);
let Snack = new Lieu("Snack", []);
console.log(Snack);
let Maison = new Lieu("Maison", []);
console.log(Maison);

// création class Personne + instanciations
class Personne {
    constructor (nom, prenom, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) => {
            if (transport == "à pied") {
                console.log(`${this.nom} a pris le bus`)
            } else if (transport.embarquer(this) == true) {
                console.log(`${this.nom} a été à pied`)
            } else {
                console.log(`${this.nom} est forcé d'aller à pied`)
            }
            arrivee.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this),1);
        }
    }
}

let chris = new Personne("DG", "Chris", 100);
let alan = new Personne("De Groef", "Alan", 150);
let marnix = new Personne("Peigne", "Arnaud", 200);

// création class Bus + instanciations
class Bus {
    constructor (personnes, caisse, prix) {
        this.personnes = personnes;
        this.caisse = caisse;
        this.prix = prix;
        this.embarquer = (user) => {
            if (user.argent >= this.prix) {
                user.argent -= this.prix; 
                this.caisse += this.prix;
                this.personnes.push(user);
                console.log(`${this.personne} a pris le bus`);
                this.personnes.splice(this.personnes.indexOf(user), 1);
                console.log(`${this.personne} est sorti du bus`);
                return true;
            } else {
                console.log("too poor, You'll need to use your feet !");
                return false;
            }
        }
    }
}

let benz = new Bus([], 0, 2.80);

// benz.embarquer(chris);
// benz.embarquer(alan);
// benz.embarquer(marnix);


Maison.personnes.push(chris);
console.log(Maison)

// ### 8h30 Vous prennez le bus vers MolenGeek.
chris.seDeplacer(Maison, Molengeek, benz);

// ### 8h45 Vous êtes à MolenGeek.
console.log(`08h45, ${chris.prenom} est à molengeek`);

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
chris.seDeplacer(Molengeek, Snack, benz);

 // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
chris.seDeplacer(Snack, Molengeek, "à pied");

