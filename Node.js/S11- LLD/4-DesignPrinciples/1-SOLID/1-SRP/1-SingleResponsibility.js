// Single Responsibility Principle

class OrderProcessingService {
    createOrder(order) {
        //login to create order
        console.log(`Order created ${order.orderId}`);
    }

    processingPayment(orderId,paymentDetails) {
        //logic to process payment
        //check for CC / DC / UPI / Cash
        console.log(`payment process for order ${orderId} with details ${paymentDetails}`);
    }

    sentEmailConfirmation(orderId,email) {
        //logic to send email confirmation
        //logic to smtp server
        //fetch some email template
        //fetch customer details
        //stictch the template with customer details
        // send email
        console.log(`email sent for order ${orderId} with email ${email}`);
    }
}

//violation of single responsibility principle

