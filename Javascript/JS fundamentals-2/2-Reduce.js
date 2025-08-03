const arr = [1, 2, 3, 4, 5];

// reduce method is used to reduce the array to a single value
// reduce method takes 3 arguments
// 1. callback function
// 2. initial value
// 3. array

//console.log(arr.reduce((acc, num) => acc + num));

//console.log(arr.reduce((acc, num) => acc + num, 0));

//console.log(arr.reduce((acc, num) => acc + num, 0, arr));

const even = arr.reduce((acc,num)=>{
    console.log(acc,num);
    
    if (num % 2 === 0) acc.push(num);
    return acc;
},[])

console.log(even);

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

const hobbies = people.reduce((acc,person)=>{
    acc.push(...person.hobbies);
    return acc;
},[]);

console.log(hobbies);