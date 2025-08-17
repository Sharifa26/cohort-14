
//promise 


//change this callback into promise
const asyncFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T1
            console.log('In between 1', 'diff - ', Date.now() - start);
            resolve('4444');
        }, 1000);
    })

    //return {somthing : true} // promise 
}
const asyncFun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T2
            console.log('In between 2', 'diff - ', Date.now() - start);
            reject('error');
        }, 2000);
    })
}

const asyncFun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {//T3
            console.log('In between 3', 'diff - ', Date.now() - start);
            resolve();
        }, 3000);
    })
}

let start = Date.now();
const main = () => {
    console.log('pre process');

    // asyncFun().then(()=>{
    //     asyncFun2().then(()=>{
    //         asyncFun3().then(()=>{
    //             console.log('All Done');
    //         })
    //     })
    // })

    //promise Chaning 

    // asyncFun()
    //     .then(asyncFun2).catch((e) => console.log(e))
    //     .then(asyncFun3).catch((e) => console.log(e))
    //     .then(()=>{
    //         console.log('complete'); 
    //     })


    const response = asyncFun(asyncFun2(asyncFun3()).catch((e) => console.log(e)));
    response.then(() => {
        console.log('Done');
    }).catch((e) => {
        console.log(e);
    })
    console.log(response);


    // const resValue = asyncFun().then((value)=>{
    //     console.log(value);
    // }).catch((e)=>{
    //     console.log(e);
    // })

    // console.log(resValue);

    console.log('main complete');
}
main();