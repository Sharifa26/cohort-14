interface paymentProcessor {
    processCreditCardPayment(amount: number): void;
    processPayPalPayment(amount: number): void;
    processBitcoinPayment(amount: number): void;
}

class OnlineStore implements paymentProcessor {
    processCreditCardPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
    processPayPalPayment(amount: number): void {
       throw new Error("PayPal payment not supported.");
    }
    processBitcoinPayment(amount: number): void {
        throw new Error("Bitcoin payment not supported.");
    }
}
        
//violation of interface segregation principle
// here OnlineStore is forced to implement methods it doesn't use