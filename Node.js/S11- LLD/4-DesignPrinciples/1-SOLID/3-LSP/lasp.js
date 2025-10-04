
class PaymentMethod {
    processPayment(orderId, paymentDetails) {
        // to be implemented by subclasses
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing credit card payment for order ${orderId} with details ${JSON.stringify(paymentDetails)}`);
    }
}
class DebitCardPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing debit card payment for order ${orderId}`);
    }
}

class UpiPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing UPI payment for order ${orderId}`);
    }
}

class freedPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        //quick fix : console.log(`No payment needed for order ${orderId}`);
        throw new Error("Free payment method does not support processing payments.");
    }
}

class CashPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing cash payment for order ${orderId}`);
    }
}

class InternetBankingPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing internet banking payment for order ${orderId}`);
    }
}

class orderServiceLSP {
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    processPayment(orderId, paymentDetails) {
        this.paymentMethod.processPayment(orderId, paymentDetails);
    }
}

// Example usage:
const paymentDetails = {type: 'CC', cardNumber: '1234-5678-9012-3456'};
const paymentMethod = new CreditCardPayment();
const orderServiceLSPInstance = new orderServiceLSP(paymentMethod);
orderServiceLSPInstance.processPayment(1, (paymentDetails));


const freePaymentMethod = new freedPayment();
const orderServiceLSPInstance1 = new orderServiceLSP(freePaymentMethod);
orderServiceLSPInstance1.processPayment(1, {});// This will throw an error, violating LSP

//vialating LSP
// The freedPayment class violates the Liskov Substitution Principle because it does not behave like a typical PaymentMethod.
// When the processPayment method is called on an instance of freedPayment, it throws an error instead of processing a payment.
// This means that any code that works with PaymentMethod objects cannot safely substitute a freedPayment object without risking runtime errors.