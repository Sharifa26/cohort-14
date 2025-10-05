const calculateTax = (amount) => {
    let tax = amount * 0.1;
    let total = amount + tax;
    return total;
}


const calculateFinalTax = (amount) => {
    let tax = amount * 0.1;
    let total = amount * 1.1 + tax;
    return total;
}


const calculateTotalUsingDry = (amount, includeTax) => {
    let total = 0.1 * amount;
    if (includeTax) {
        amount = amount * 1.1;
    }
    return amount + total;
}