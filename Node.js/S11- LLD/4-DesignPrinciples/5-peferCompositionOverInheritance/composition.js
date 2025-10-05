class QuackBehavior {
    quack() {
        console.log("Quack");
    }
}
class SwimBehavior {
    swim() {
        console.log("Swim");
    }
}
class FlyBehavior {
    fly() {
        console.log("Fly");
    }
}


class Duck {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`${this.name} is a duck`);
    }
}


class LakeDuck extends Duck {
    constructor(name, flyBehavior, quackBehavior) {
        super(name);
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    quack() {
        this.quackBehavior.quack();
    }
    fly() {
        this.flyBehavior.fly();
    }
}


class RubberDuck extends Duck {
    constructor(name,quackBehavior) {

        super(name);
        this.quackBehavior = quackBehavior;
    }

    quack() {
        this.quackBehavior.quack();
    }
}