const promise1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise1 is resolve');
    }, 10000)
});

const promise2 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise2 is resolve');
    }, 5000)
});

async function handlePromise() {
    console.log('Start');
    // JE wait to resolve promise
    const promise1Data = await promise1;
    console.log(promise1Data);

    console.log('Middle');

    const promise2Data = await promise2;
    console.log(promise2Data);

    console.log('End');
}
handlePromise();
console.log('Synchronous Code');
