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
    console.log('Start');  // 1

    promise.then((data) => console.log('Then ', data)); // 3

    const promiseData1 = await promise;
    console.log('Await1 ', promiseData1);  // 4

    console.log('Middle');  // 5

    const promiseData2 = await promise;
    console.log('Await2 ', promiseData2);  // 6

    console.log('End');  // 7
}
handlePromise();
console.log('Remaining Synchronous code');  //2
