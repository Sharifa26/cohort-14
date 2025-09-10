const add = (a,b)=>{
    if (typeof a != 'number' || typeof b != 'number') return -1;
    
    return a+b;
}

module.exports = {add}