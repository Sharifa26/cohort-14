interface Engine {
  start(): void;
}

//low level module
class PetrolEngine1 implements Engine {
  start(): void {
    console.log("Petrol engine started");
  }
}

class DieselEngine implements Engine {
  start(): void {
    console.log("Diesel engine started");
  }
}

//high level module
class Car1 {
  private engine: Engine;

  //Dependency Injection
  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start();
    console.log("Car is Driving");
  }
}

const petrolEngine = new PetrolEngine1();
const tata1 = new Car1(petrolEngine);
tata1.start();

const dieselEngine = new DieselEngine();
const tata2 = new Car1(dieselEngine);
tata2.start();

// Dependency Inversion  is acheived by Dependency Injection.
