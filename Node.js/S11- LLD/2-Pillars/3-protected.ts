class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    protected getName(): string {
        return ` Name is ${this.name}`;
    }
}

class Employee extends Person {
    private role: string;
    constructor(name: string, role: string) {
        super(name);
        this.role = role;
    }

    public getRole(): string {
        // here the getName() method is working as protected method
        return `${this.getName()} is a ${this.role}`;
    }
}

let employee = new Employee("John", "Manager");

console.log(employee.getRole());

//here the getName is not working bcoz it is protected
//console.log(employee.getName());
