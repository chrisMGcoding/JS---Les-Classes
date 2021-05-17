class personnage {
    constructor (age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () => {
            console.log(`bonjour, je m'appelle ${this.nom}`);
        }
    }
}

let chris = new personnage(27, "Chris", "BXL");
let alan = new personnage(26, "alan", "BXL");

chris.sePresenter();
alan.sePresenter();