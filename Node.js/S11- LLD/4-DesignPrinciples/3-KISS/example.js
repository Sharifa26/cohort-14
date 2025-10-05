const processorder = (order) => {
    if (order.isValid()) {
        if (order.getItem().size > 0) {
            for (let item of order.getItem()) {
                if (item.isAvailable()) {
                    order.process();
                } else {
                    order.removeFromCard();
                }
            }
            order.confirm();
        } else {
            order.cancel();
        }
    }

}
//violation of KISS principle


//Hadling Item separately
const processIdem = (items) =>{
    for (let item of items) {
        if (item.isAvailable()) {
            order.process();
        } else {
            order.removeFromCard();
        }
    }
}

//Hadling order processing simply
const processOrderKISS = (order) => {
    if (order.isValid()) {
        return;
    }
    if (order.getItem().size === 0) {
        order.cancel();
        return;
    }
    processIdem(order.getItem());
    order.confirm();
    return;
}