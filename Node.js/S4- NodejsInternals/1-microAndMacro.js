//mIcro queue - callbacks of promises, next.tick
//The microtask queue is processed after each task, and the event loop will keep processing the microtask queue until it's empty before moving onto macrotasks.


//mAcro queue - Timers,Settimeout.Intervals
//A macrotask in JavaScript is a type of task that gets queued in the macrotask queue. Examples of macrotasks include script executions, setTimeout and setInterval.


//Example 1 
// console.log('start');

// setTimeout(() => {//T1
//     console.log('Main Timer');
// }, 0);

// Promise.resolve().then(()=>{//p1
//     console.log('promise 1'); 
// });

// Promise.resolve().then(()=>{//p2
//     console.log('promise 2'); 
// });

// Promise.resolve().then(()=>{//p3
//     console.log('promise 3'); 
// });

// console.log('End');


//Example 2

// for(let i=0;i<5;i++){

//     setTimeout(() => {//T1
//         console.log('Main Timer');
//     }, 0);

//     Promise.resolve().then(() => {//p1
//         console.log('promise 1');
//     });
// }


//Example 3

console.log('start');

setTimeout(() => {//T1
    console.log('main timer');
}, 100);

Promise.resolve().then(()=>{//P1
    console.log('promise callback');
    setTimeout(() => {//T2
        console.log('main timer2');
    }, 100);
    Promise.resolve().then(() => {//p2
        console.log('Inner promise callback');
    });
});

console.log('End');
