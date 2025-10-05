interface Engine {
    start(): void;
}

//low level module
class PetrolEngine implements Engine {
    start(): void {
        console.log("Petrol engine started");
    }
}




//high level module
class Car {
    private engine: Engine;

    constructor() {
        this.engine = new PetrolEngine();
    }

    start(): void {
        this.engine.start();
        console.log("Car is Driving");
    }   
    
}

const tata = new Car();
tata.start();

//violation of Dependency Inversion Principle