// Duck System
class Duck {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(`${this.name} is a duck`);
    }
    quack() {
        console.log(`${this.name} quacks`);
    }
    swim() {
        console.log(`${this.name} can swim`);
    }
    fly() {
        console.log(`${this.name} can fly`);
    }
}


class LakeDuck extends Duck {
    constructor(name) {
        super(name);
    }
    quack() {
        console.log(`${this.name} quacks like a duck`);
    }
    fly() {
        console.log(`${this.name} can fly like a duck`);
    }f
}


//fragile base class problem
class RubberDuck extends Duck {
    constructor(name) {
        super(name);
    }
    quack() {
        console.log(`${this.name} quacks like a rubber duck`);
    }
    fly() {
        throw new Error("Rubber ducks can't fly");
    }
    swim() {
        throw new Error("Rubber ducks can't swim");
    }
}