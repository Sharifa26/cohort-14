//example 1
// setTimeout(() => {//T1
//     console.log('main timer');
// }, 100);

// Promise.resolve().then(() => {//P1
//         console.log('promise callback');
// });

// process.nextTick(()=> console.log('process.nextTick'));

// console.log('Main');

//Example 2
setTimeout(() => {//T1
    console.log('main timer');
}, 100);

Promise.resolve().then(() => {//P1
    const f=(()=>{
        console.log('Inner promise callback');
    });
    f();
    process.nextTick(() => console.log('process.nextTick 1'));//NT2
    console.log('promise callback');
});

process.nextTick(() => console.log('process.nextTick'));//NT!

console.log('Main');