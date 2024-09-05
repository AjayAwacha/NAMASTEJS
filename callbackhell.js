
function selectOrder(callback) {
    setTimeout(() => {
       console.log('order is selected');
        callback();
    }, 1000)
}

function createOrder(callback) {
    setTimeout(() => {
        console.log('Order is created successfully');
        callback();
    }, 2000)
}

function makePayment() {
    setTimeout(() => {
        console.log('payment successfully');
    }, 3000)
}

selectOrder(function() {
    createOrder(function() {
        makePayment();
    })
})