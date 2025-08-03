const fs = require('fs');
let start = Date.now();
const filePath = './lengthyFile.txt';

console.log("started reading file");

const data = fs.readFile(filePath, 'utf8',(err,data)=>{
    if(err){
        console.error(`Error in reading file ${Date.now() - start} ms`,err.message);
        
    }
    console.log(` File reading completed in ${Date.now() - start} ms`);
});

console.log(` Async File reading completed in ${Date.now() - start} ms`);



let start2 = Date.now();
//loop -1
for (let i = 0; i < 45000000; i++) {
    //
}
console.log(`loop completed in ${Date.now() - start2} ms`);

//loop -2
for (let i = 0; i < 450; i++) {
    //
}
console.log(`loop2 completed in ${Date.now() - start2} ms`);

//loop -3
for (let i = 0; i < 10000; i++) {
    //
}
console.log(`loop3 completed in ${Date.now() - start2} ms`);

//loop -4
for (let i = 0; i < 2000000; i++) {
    //
}
console.log(`loop4 completed in ${Date.now() - start2} ms`);