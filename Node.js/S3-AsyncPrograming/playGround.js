// const asyncFun = (cb) => {
//     setTimeout(() => {
//         console.log('In between');
//         for(let i=0;i<5;i++){
//             cb();
//         }
//     }, 1000)
// }

// const main = () => {
//     console.log('Start');
//     asyncFun(() => {
//         console.log('End');
//     });
// }
// main();


//promise 


//change this callback into promise
let start = Date.now();
const asyncFun = () => {
    return new Promise((resolve,reject) =>{
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
            reject('error')
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


const response = Promise.all([asyncFun(),asyncFun2(),asyncFun3()]);

response.then((res) => {
    console.log(res);
}).catch((e)=>{
    console.log(e);
})

console.log(response);

