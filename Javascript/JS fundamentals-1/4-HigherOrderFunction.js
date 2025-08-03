//Higher Order Functions
// Higher Order Functions are functions that take other functions as arguments or return functions as results.

function cookFood(order){
    console.log(`Cooking Food: ${order}...`);
}

function drink(order){
    console.log(`Serving Drink: ${order}...`);
}

function Resturant(cookFood, drink, type, order){
    if(type === "Food"){
        cookFood(order);
    }
    else if(type === "Drink"){
        drink(order);
    }
}

Resturant(cookFood, drink, "Food", "Pizza");
Resturant(cookFood, drink, "Drink", "Beer");

