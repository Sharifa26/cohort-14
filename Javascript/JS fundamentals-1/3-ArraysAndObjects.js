//Non homogeneous arrays
//Arrays

const arr = new Array(5).fill(0);
console.log(arr);

arr[0] = "sharifa";
arr[1] = 24;

console.log(arr);

//Objects

const obj ={
    "key1":"sharifa",
    "key2":24
}

console.log(obj, obj.key1, obj["key2"]);

//**Shallow Cloning.**
const fruits =["apple","mango"]

const clone = fruits; //no new memory is created, using the same memory location

console.log(clone,"1");
console.log(fruits,"2");

clone[1] = "banana";

console.log(fruits,"3");// output-["apple","banana"] 3

//shallow cloning is taking the reference of the Fruits array to clone

const details ={
    name:"sharifa",
    age:24,
    skills:["javascript","react","node"]
}

console.log(details);

const cloneDetails = details;

cloneDetails.name = "Muhammad";
console.log(details);

// Here Also shallow cloning is taking the reference of the details object to clone.


/****Deep Cloning****/
//In the deep cloning, a new memory is created for the cloned object.but the deep copy only works at the first level of the object. if we add this value to the second level of main object Also changes will be reflected in the clone object.

const cloneCorrect = {...details};

cloneCorrect.name = "sahil";
cloneCorrect.skills.push("java");

console.log("1",details);
console.log("2",cloneCorrect);

//Here the new memory is created and the cloneCorrect object is pointing to the new memory location.