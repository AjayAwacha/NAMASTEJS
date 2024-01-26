// Async function always return promise
// if we do not return anything it wap undefined in promise and return
// if return normal value warp that value in promise and return

// async function getData() {
//     return "Async Function";
// }
// const data = getData();
// console.log(data);
// data.then((data) => {
//     console.log(data);
// })

const promise = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve('Promise1 is resolve');
    }, 10000)
});

// difference between handling promise using then and await
async function handlePromise() {
    console.log('Start');

    // JE not wait to resolve promise
    // promise.then((data) => console.log(data));

    // JE wait to resolve promise
    const promiseData1 = await promise;
    console.log(promiseData1);

    console.log('Middle');

    const promiseData2 = await promise;
    console.log(promiseData2);

    console.log('End');
}
handlePromise();
