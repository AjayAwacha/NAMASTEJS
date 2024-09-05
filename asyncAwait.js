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
    console.log('Start');  // 1
    // JE wait to resolve promise
    const promise1Data = await promise1;
    console.log(promise1Data);  // 3

    console.log('Middle');  // 4

    const promise2Data = await promise2;
    console.log(promise2Data);  // 5

    console.log('End');  // 6
}
handlePromise();
console.log('Synchronous Code');  // 2
