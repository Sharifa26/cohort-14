const fs = require('fs');

let path = './input.txt';
let start = Date.now();

const data = fs.readFileSync(path, 'utf8');

console.log(data + '\n'+ `File reading completed in ${Date.now() - start} ms`);


const newData = fs.writeFileSync(path, "this is a new file");
console.log(`File writing completed in ${Date.now() - start} ms`);