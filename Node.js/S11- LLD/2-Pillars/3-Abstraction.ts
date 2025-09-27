
//interface
interface Flyable {
    wings: string;
    takeOff(): void;
    fly(): void;
    land(): void;
}

interface drivable {
    wheels: number;
    drive(): void;
    start(): void;
    stop(): void;
}


class  car implements drivable{
    wheels: number;
    constructor(wheels: number) {
        this.wheels = wheels;
    }
    drive(): void {
        console.log("driving");
    }
    start(): void {
        console.log("starting");
    }
    stop(): void {
        console.log("stopping");
    }
}


// for standardization of code
class Tesla implements Flyable, drivable {
    wheels: number;
    wings: string;

    constructor(wheels: number, wings: string) {
        this.wheels = wheels;
        this.wings = wings;
    }
    drive(): void {
        console.log("driving");
    }
    start(): void {
        console.log("starting");
    }
    stop(): void {
        console.log("stopping");
    }
    fly(): void {
        console.log("flying");
    }
    land(): void {
        console.log("landing");
    }
    takeOff(): void {
        console.log("taking off");
    }
}








// abstract class
abstract class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  //   start(): void {
  //     console.log(`${this.make} ${this.model} is starting to up....`);
  //   }

  abstract start(): void;

  stop(): void {
    console.log(`${this.make} ${this.model} is stopping`);
  }
}

// //override the method of parent class
// class petrolCar extends Vehicle {
//     start(): void {
//         console.log(`${this.make} ${this.model} is starting to fuel up....`);
//     }
// }

// //override the method of parent class
// class dieselCar extends Vehicle {
//     start(): void {
//         console.log(`${this.make} ${this.model} is starting to diesel up....`);
//     }
// }

// //override the method of parent class
// class EvCar extends Vehicle {
//     start(): void {
//         console.log(`EV ${this.make} ${this.model} is starting to charge....`);
//     }
// }

class petrolCar extends Vehicle {
  start(): void {
    console.log(`${this.make} ${this.model} is starting to fuel up....`);
  }
}

//let car = new petrolCar("BMW", "X5");
//car.start();
