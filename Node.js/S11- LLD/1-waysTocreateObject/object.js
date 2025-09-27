const { start } = require("repl");

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red',
    price: 10000,
    start: function(){
        console.log(`Car: ${this.make} ${this.model} is ${this.color} and costs ${this.price} dollars`);
    },
    //this giving me undefined bcoz of the this keyword is not in the function it is in the arrow function.
    // start: ()=>{
    //     console.log(`Car: ${this.make} ${this.model} is ${this.color} and costs ${this.price} dollars`);
    // }
};

//car.start();


//using constructor function
function Car1(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.start = function(){
        console.log(`Car: ${this.make} ${this.model} is starting...🚗🚗🚗`);
    }
}


const MarutiVictoris = new Car1('Maruti','Victoris',2020);
MarutiVictoris.make = 'Benz';
//MarutiVictoris.start();

const ToyotaCamry = new Car1('Toyota','Camry',2020);
//ToyotaCamry.start();

const HondaCivic = new Car1('Honda','Civic',2020);
//HondaCivic.start();


// using class keyword
class Car{
    #make;

    constructor(make,model,year){
        this.#make = make;
        this.model = model;
        this.year = year;
    }

    #injectFuel() {
        console.log(`${this.#make} injecting fuel...`);

    }

    start(){
        this.#injectFuel();
        console.log(`Car: ${this.#make} ${this.model} is starting...🚗🚗🚗`);
    }
}


const tata = new Car('Tata','Nano',2020);
//tata.#make = 'Honda';

tata.start();
//tata.#injectFuel();