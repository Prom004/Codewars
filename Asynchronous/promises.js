const cart= ["pants", "shirt", "shoes"];

const promise = createorder(cart);

promise.then(function() {
    proceedToPayment();
});


function createorder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // create order
        // Validate cart
        //orderId

        if (validateCart(cart)){
            const err = new Error("Cart is empty");
            reject(err);
        }
        // logic to create order
        const orderId = "12345";
        if(orderId){
            console.log("Order created successfully");
            resolve(orderId);
        }
    });
    return pr;
}
