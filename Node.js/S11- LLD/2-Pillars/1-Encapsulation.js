// Encapsulation is the process of hiding the internal details of an object and exposing only the necessary information. 
class fruit {
    // Private property
    #name
    constructor(name, color) {
        this.#name = name;
        this.color = color;
    }

    getReadyToEat() {
        console.log(`I am a ${this.#name} and I am ${this.color}`);
    }

    //public property
    getName() {
        console.log(this.#name);
    }
}


const apple = new fruit('Apple', 'Red');
apple.getReadyToEat();
apple.getName();

