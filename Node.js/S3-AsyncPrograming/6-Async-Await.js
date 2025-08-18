//Ascyn Await - Synactical sugar overs the promises.
//Aynsc awit dont block the thread. - Non blocking behavior.

console.log('for loop started - 10 sec');
setTimeout(() => {//T1

    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
}, 10000);

const add = (a, b, c) => a + b + c;

console.log('adding started - 5 sec');
setTimeout(() => {//T2
    console.log(add(3, 7, 1));
}, 5000);

const name1 = (n) => {//T3
    return new Promise((resolve, reject) => {
        console.log('promise started - 10 sec');
        setTimeout(() => {
            //console.log(`hello ${n}`);
            reject(n);
        }, 10000);
    })
}



const main = async () => {//TLF
    console.log('start');

    try {
        const res = await name1('sharifa');
        console.log(res);
    } catch (e) {
        console.log('Error', e);

    }

    // const res = name1('sharifa');
    // res.then((r)=> console.log(r)).catch((e)=> console.log(e));
    // console.log(res);

    console.log('End');
}

main();