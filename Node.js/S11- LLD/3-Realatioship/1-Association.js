// Uses - A Relationship where one class uses another class.
//the relationship is a one-to-one relationship.

class Persons {
    constructor(name) {
        this.name = name;
    }

    openAccount(bank) {
        console.log(`${this.name} is opening an account at ${bank.name}`);
    }
}

class Bank {
    constructor(name) {
        this.name = name;
    }

    provideLoan(person) {
        console.log(`${this.name} is providing a loan to ${person.name}`);
    }
}

let sharifa = new Persons("sharifa");
let Indian = new Bank("Indian Bank");

sharifa.openAccount(Indian);
Indian.provideLoan(sharifa);