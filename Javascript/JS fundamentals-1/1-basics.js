//variables

var name = "sharifa"; //string
let age = 24; //number
const salary = 10000; //number
let isLegal = true; //boolean
let symbol = Symbol(); //symbol
const nullValue = null; //null
const undefinedValue = undefined; //undefined

console.log(name, age, salary, isLegal, symbol, nullValue, undefinedValue);

//keywords
//var,let -> Re-assignable
//const -> Cannot be re-assigned

//Conditional statements
if (age > 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

if(age === '24'){
    console.log("False");
}
else{
    console.log("True");
}

//Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//Do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

function hello(){
    console.log(`Hello ${name}`);
    
}
//Function call
hello();