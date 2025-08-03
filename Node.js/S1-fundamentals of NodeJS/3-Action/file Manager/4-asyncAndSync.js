const fs = require('fs');

let path = './input.txt';

let start = Date.now();

fs.readFile(path, 'utf8',(err,data)=>{
    if(err){
        console.error(`Error in reading file ${Date.now() - start} ms`,err.message);
        
    }
    console.log(data + '\n'+ `File reading completed in ${Date.now() - start} ms`);
});

fs.writeFileSync(path, "this is a new file for writing 4");
console.log(`File writing completed in ${Date.now() - start} ms`);