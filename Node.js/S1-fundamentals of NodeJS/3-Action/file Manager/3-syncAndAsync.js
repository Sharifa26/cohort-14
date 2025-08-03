const fs = require('fs');

let path = './input.txt';

let start = Date.now();

const data = fs.readFileSync(path, 'utf8');
console.log(data + '\n'+ `File reading completed in ${Date.now() - start} ms`);

start = Date.now();
fs.writeFile(path, "this is a new file for writing 3",(err)=>{
    if(err){
        console.error(`Error in writing file ${Date.now() - start} ms`,err.message);
        
    }
    console.log(`File writing completed in ${Date.now() - start} ms`);
});