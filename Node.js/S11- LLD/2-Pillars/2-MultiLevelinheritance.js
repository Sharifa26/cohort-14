//parent class
class Animal {
    #name
    constructor(name, sound) {
        this.#name = name;
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }

    getName() {
        return this.#name; 
    }

    setName(name) {
        if(typeof name === 'string' && name.length > 0) {
            this.#name = name;
        }
        else {
            throw new Error('Name must be a string');
        }
    }
}

//child class
class Mammal extends Animal {
    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    //override parent class method
    speak() {
        console.log(`${this.getName()} says ${this.sound} sweetly`);
    }

    breathe() {
        console.log(`${this.getName()} and ${this.type} are breathing ... 🫁`);
        
    }
}

//child class of child class
class Human extends Mammal {
    constructor(name, sound, type,canThink) {
        super(name, sound, type);
        this.canThink = canThink;
    }

    //override parent class method
    talk() {
        super.speak();
        console.log(`${this.getName()} is talking`);
    }

    think() {
        if(this.canThink) {
            console.log(`${this.getName()} is thinking`);
        }
        else {
            throw new Error('You cannot think');
        }
    }
}


// let Lion = new Mammal('Mammal', 'roar', 'Carnivore');

// Lion.speak();
// Lion.breathe();
// Lion.getName();
// Lion.setName('Lion');
// console.log(Lion.type);
// Lion.getName();

let Sharifa = new Human('Sharifa', 'talks', 'domestic', true);

Sharifa.speak();  // Mammal class method
Sharifa.breathe(); // Mammal class method
Sharifa.setName('Sharifa2'); // Animal class method
Sharifa.think(); // Human class method
Sharifa.talk(); // Human class method