const asyncFun = (cb) => {
    setTimeout(() => {//T1
        console.log('In between 1', 'diff - ', Date.now() - start);
        cb(4);
    }, 1000)
}

const asyncFun2 = (cb) => {
    setTimeout(() => {//T2
        console.log('In between 2', 'diff - ', Date.now() - start);
        cb(5);
    }, 2000)
}

const asyncFun3 = (cb) => {
    setTimeout(() => {//T3
        console.log('In between 3', 'diff - ', Date.now() - start);
        cb(6);
    }, 3000)
}

let start = Date.now();
const main = () => {
    console.log('pre process');
    asyncFun((res) => {
        console.log(res);
        asyncFun2((res) => {
            console.log(res);
            asyncFun3((res) => {
                console.log(res);
                console.log('All Done');
            })
        })
    });
    console.log('main complete');
}
main();