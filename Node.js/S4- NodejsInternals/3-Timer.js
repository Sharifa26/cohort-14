
//Example 1
//console.log('start');

// setTimeout(() => {
// console.log('setTime out I/O');
// }, 0);


// setImmediate(()=>{
//     console.log('Set Immediate I/O');
// });

// process.nextTick(()=> console.log('Next tick')
// );

// setInterval(() => {
//     console.log('set intervals');
    
// }, 0);


//example 2

// const fs = require('fs');

// fs.readFile('./file.txt',()=>{
//     setTimeout(() => {
//         console.log('set time out !!');
//     }, 0);

//     setImmediate(()=> console.log('set Immediate'));

//     console.log('file read complete');
    
// });

//Example 3

// console.log('start');

// // Promise.resolve().then(()=>{
// //     setTimeout(() => {
// //         console.log('timer');
// //     }, 0);
// //     console.log('middle');
// // });

// new Promise(()=>{
//     setTimeout(() => {
//         console.log('timer');
//     }, 0);
//     console.log('middle');
// });

// console.log('end');



//Example 4

const internals = async () =>{
    console.log('Internal log');
}

const main = async () =>{
    setTimeout(() => {
        console.log('Timer');
    }, 0);

    Promise.resolve().then(()=> console.log('promise'))

    await internals();

    console.log('End');
}

main();