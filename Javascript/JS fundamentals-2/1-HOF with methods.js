// Higher Order Functions with Methods

const arr = [1, 2, 3, 4, 5];

/**  ForEach method is a higher order function which takes a callback function as an argument and executes it for each element in the array.**/

// arr.forEach((element,index,array)=>{
//     console.log(element,index,array);
// });

const printonlyOdds = (element, index, array) => {
    if (element % 2 === 1) {
        console.log(`Odd element ${element} at ${index}`);
    }
}

const printonlyEvens = (element, index, array) => {
    if (element % 2 === 0) {
        console.log(element, index, array);
    }
}


arr.forEach(printonlyOdds);
arr.forEach(printonlyEvens);


/** map Method  - Returns a new array with the results of calling a provided function on every element in the calling array.**/

function sqr(num) {
    return num * num;
}
//const SqrArr = arr.map(sqr);
const SqrArr = arr.map(sqr).map(sqr);

//console.log(SqrArr);

//add All elements of the array expect the current element
const total = arr.reduce((acc, num) => acc + num);

const result = arr.map((num) => total - num);

//console.log(result);

/** Filter Method - filter out the elements that matchs the condition and returns a new array.**/

const isEven = (num) => num % 2 === 0;
//const evennumbers = arr.filter((num)=> num % 2 === 0);
const evennumbers = arr.filter(isEven).map(sqr);
//console.log(evennumbers);
const people = [
    {
        id: 1,
        favoriteFood: "Pizza",
        age: 24,
        hobbies: ["Reading", "Gaming", "Cooking"]
    },
    {
        id: 2,
        favoriteFood: "Burger",
        age: 30,
        hobbies: ["Traveling", "Swimming", "Photography"]
    },
    {
        id: 3,
        favoriteFood: "Sushi",
        age: 27,
        hobbies: ["Cycling", "Music", "Cooking"]
    },
    {
        id: 4,
        favoriteFood: "Ramen",
        age: 22,
        hobbies: ["Drawing", "Gaming", "Movies"]
    },
    {
        id: 5,
        favoriteFood: "Tacos",
        age: 29,
        hobbies: ["Hiking", "Traveling", "Fitness"]
    }
];

const peoplewithages = people.filter((person)=> person.age <= 25);
//console.log(peoplewithages);


const scores = people.map((details)=>{
    if(details.favoriteFood === "Pizza"){
        return{
            ...details,
            score:100
        }
    }
    return {
        ...details,
        score:0
    }
})

//console.log(scores);

console.log(people);

const final = people.map((person)=>{
    return {
        //here the second order array is also changed
        hobbies:person.hobbies.push("test")
    }
})


console.log(final);

console.log(people);

