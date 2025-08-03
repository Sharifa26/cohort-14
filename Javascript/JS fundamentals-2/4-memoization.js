let start = Date.now();
const add = (a,b,c)=>{
    console.log("Add ran for",a,b,c);
    console.log(a+b+c);
}

function memo(fn){
    let cache = new Map();

    return function memoized(...args){
        const key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key,result);
        return result;
    }
}
const memoAdd = memo(add);

console.log(memoAdd(1,2,3));
console.log(memoAdd(2,3,4));
console.log(memoAdd(1,2,3));

// memoAdd(1,2,3);
// memoAdd(2,3,4);
// memoAdd(1,2,3);