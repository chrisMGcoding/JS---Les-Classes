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
