// HAS A - (strong relation ship) - A Relationship where one class is composed of other classes.

class Heart {
    beat() {
        console.log("Heart is beating");
    }
}

class Human {
    #heart;
    constructor(name){
        this.name = name;
        this.#heart = new Heart();
    }
    live() {
        console.log(`${this.name} is living`);
        this.#heart.beat();
    }
}

let sharifa = new Human("sharifa");
sharifa.live();