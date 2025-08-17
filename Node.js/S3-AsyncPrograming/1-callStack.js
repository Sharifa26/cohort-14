//call Stack

const f1 = () => {
    console.log('f1 is called');
    f2();
    console.log('Exiting f1');

}
const f2 = () => {
    console.log('f2 is called');
    f3();
    console.log('Exiting f2');

}
const f3 = () => {
    // try {
    //     throw new error('Error')
    // } catch (e) {
    //     console.log(e);

    // }
    console.log('Exiting f3');

}

//f1();



//multiple a number four times 

const multi1 = (num) => {
    console.log('multi1 is calling');
    return num * multi2(num);
}
const multi2 = (num) => {
    console.log('multi2 is calling');
    return num * multi3(num);
}
const multi3 = (num) => {
    console.log('multi3 is calling');
    return num * multi4(num);
}
const multi4 = (num) => {
    console.log('multi4 is calling');
    return num * num;
}

console.log(multi1(2));

