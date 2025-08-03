const fs = require('fs');
let start = Date.now();
const filePath = './lengthyFile.txt';

const data = fs.readFileSync(filePath, 'utf8');

console.log(` File reading completed in ${Date.now() - start} ms`);



start = Date.now();
for(let i = 0; i <450000;i++){
   //
   
}
console.log(`loop completed in ${Date.now() - start} ms`);
