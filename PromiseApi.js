const promise1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise1 is resolve');
    }, 10000)
});

async function handlePromise() {
    console.log('Start');
    const testresolve = await Promise.resolve('Promise with already resolved 1');
    console.log(testresolve);

    console.log('Middle');

    const promise1Data = await promise1;
    console.log(promise1Data);

    console.log('End');
}
handlePromise();
console.log('Synchronous code');