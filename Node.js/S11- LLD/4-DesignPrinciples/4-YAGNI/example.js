// YAGNI principle - You Aren't Gonna Need It

// I want to create a calculator which can do basic operations like addition and  subtraction.


class Calculator {
    constructor() {
        this.result = 0;
    }
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }
    divide(a, b) {
        this.result = a / b;
        return this.result;
    }
}


// Here, we have added multiply and divide methods, but if we don't need them, it violates the YAGNI principle.

// To adhere to the YAGNI principle, we should only implement the methods that are currently needed.