
function selectOrder(callback) {
    setTimeout(() => {
       console.log('order is selected');
        callback();
    }, 5000)
}

function createOrder(callback) {
    setTimeout(() => {
        console.log('Order is created successfully');
        callback();
    }, 5000)
}

function makePayment() {
    setTimeout(() => {
        console.log('payment successfully');
    }, 5000)
}

selectOrder(function() {
    createOrder(function() {
        makePayment();
    })
})