// Open Closed Principle

class PaymentService {
    processPayment(orderId, paymentDetails) {
        if(paymentDetails.type === 'CC') {
            console.log(`Processing credit card payment for order ${orderId}`);
        }else if(paymentDetails.type === 'DC') {
            console.log(`Processing debit card payment for order ${orderId}`);
        } else if(paymentDetails.type === 'UPI') {
            console.log(`Processing UPI payment for order ${orderId}`);
        } else if(paymentDetails.type === 'Cash') {
            console.log(`Processing cash payment for order ${orderId}`);
        }
    }
}

//violation of open closed principle

// if we want to add a new payment method, we need to modify the existing code
// we need to add a new else if block for the new payment method
// this is a violation of open closed principle.


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


// Adhering to open closed principle
// if we want to add a new payment method, we can create a new class that extends PaymentMethod
// we don't need to modify the existing code
// this is adhering to open closed principle.
class paymentServiceOCP {
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    processPayment(orderId, paymentDetails) {
        this.paymentMethod.processPayment(orderId, paymentDetails);
    }
}

const paymentDetails = {type: 'CC', cardNumber: '1234-5678-9012-3456'};
const paymentMethod = new CreditCardPayment();
const paymentServiceOCPInstance = new paymentServiceOCP(paymentMethod);
paymentServiceOCPInstance.processPayment(1, paymentDetails);




 