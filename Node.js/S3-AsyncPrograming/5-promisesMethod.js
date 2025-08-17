
//change this callback into promise
let start = Date.now();
const asyncFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T1
            console.log('In between 1', 'diff - ', Date.now() - start);
            resolve('1111');
        }, 1000);
    })

    //return {somthing : true} // promise 
}
const asyncFun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T2
            console.log('In between 2', 'diff - ', Date.now() - start);
            resolve('error')
        }, 2000);
    })
}

const asyncFun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T3
            console.log('In between 3', 'diff - ', Date.now() - start);
            resolve('3333');
        }, 3000);
    })
}



// Promise.all() lets you wait for multiple asynchronous operations to finish, and gives you all their results at once, or fails if any do not succeed.

//const response = Promise.all([asyncFun(),asyncFun2(),asyncFun3()]);


//Promise.allSettled() lets you wait for all asynchronous tasks to finish—no matter if they succeed or fail—and then gives you the outcome of each.

//const response = Promise.allSettled([asyncFun(), asyncFun2(), asyncFun3()]);

// Promise.race() lets multiple asynchronous operations run at once, and gives you the result of the one that finishes first—no matter if it succeeded or failed.

//const response = Promise.race([asyncFun(), asyncFun2(), asyncFun3()]);



//Promise.any() waits only for the first promise to successfully complete (fulfill), ignoring failures, but if all fail, it reports an error.
const response = Promise.any([asyncFun(), asyncFun2(), asyncFun3()]);

response.then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})

console.log(response);

