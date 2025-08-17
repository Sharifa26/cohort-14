//sync Excecution
// console.log('Start');
// console.log('In between');
// console.log('End');


//Async Execution

// console.log('Start');
// setTimeout(()=>{
//     console.log('In between');
// },100)
// console.log('End');


//Async Execution - example 2

const main = () => {
    console.log('Start');
    const start = Date.now();
    setTimeout(() => {
        console.log('In between');
        for (let index = 0; index < 100; index++) {
            console.log(index);
        }
        console.log('time diff', Date.now() - start);

    }, 202);

    setTimeout(() => {
        console.log('In between2');
        console.log('time diff', Date.now() - start);
    }, 2010);

    setTimeout(() => {
        console.log('In between3');
        console.log('time diff', Date.now() - start);
    }, 2030)
    console.log('End');
}
main();