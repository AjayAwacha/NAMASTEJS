const selectOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('item is selected');
        reject(new Error('First Promise reject'));
     }, 5000)
});

const createOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Order is created successfully')
     }, 5000)
});

const makePayment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('makePayment')
     }, 5000)
});

selectOrder
.then((data) => {
    return data;
})
.catch((err) => {       // because of this catch below promises are execute event if there
    console.log(err);   // first promise reject
})
.then((data) => {
    console.log(data);
    return createOrder;
})
.then((data) => {
    console.log(data);
    return makePayment;
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log('Final Catch ', err);
});

// this is how we solve callback hell problem by using promise chain
// we can increase code readability and maintainilibity

// we can also solve secound problem by attaching callback in then here we are not lose
// control over callback

// in callback we pass callback function in promise we attach callback functions