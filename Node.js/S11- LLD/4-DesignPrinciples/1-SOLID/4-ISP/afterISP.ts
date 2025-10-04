interface CreditcardPaymentProcessor {
    processCreditCardPayment(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPalPayment(amount: number): void;
}

interface BitcoinPaymentProcessor {
    processBitcoinPayment(amount: number): void;
}


class OnlineStore1 implements CreditcardPaymentProcessor, PayPalPaymentProcessor {
    processCreditCardPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
    processPayPalPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}