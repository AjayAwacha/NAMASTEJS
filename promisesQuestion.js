//1
// console.log('Start');
// const promise = new Promise((resolve, reject) => {
//     console.log('1');
//     resolve('2');
//     console.log('3');
// });
// promise.then((res) => {
//     console.log(res);
// });
// console.log('End');

// Note: promise constructor is start executing when it defined and execute synchronously

//2
// console.log('Start');
// const f = () => {
//     return new Promise((resolve, reject) => {
//         console.log('1');
//         resolve('Success');
//     })
// }
// console.log('Middle');
// f().then((res) => {
//     console.log(res);
// });
// console.log('End');

// Note: in promise chain if previus .then is resolve then next .then() is executed
// Note: .then() is execute only when previous promise is rejected
// Note: inside .then() or .catch() if we return any value it act as return resolve promise

//3
// function job() {
//     return new Promise((resolve, reject) => {
//         resolve();
//         reject();
//     })
// }
// const promise1 = job();
// promise1.then(() => {
//     console.log('Success1');
//     return "Test Success";
// }).then((res) => {
//     console.log(res);
//     console.log('Success2');
// }).then(() => {
//     console.log('Success3');
// }).catch(() => {
//     console.log('Error1');
// }).then(() => {
//     console.log('Success4');
// }).catch(() => {
//     console.log('Error2');
// })

//4
// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state) {
//             resolve('Success');
//         } else {
//             reject('Reject');
//         }
//     })
// }
// const promise1 = job(true);
// promise1.then((res) => {
//     console.log(res);
//     return job(false);
// }).catch((err) => {
//     console.log(err);
//     return 'SOME VALUE'
// }).then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log('Error1');
// }).then(() => {
//     console.log('Success Last');
// })

// Note: Promise.then() only execute when resolve called inside Promise constructor
//5
// function job() {
//     return new Promise((resolve, reject) => {
//         resolve('RESOLVE PROMISE')
//         // return 'RESOLVE PROMISE'
//     })
// }
// const promise2 = job();
// promise2.then((res) => {
//     console.log(res);
//     return 'SOME VAL1';
// }).then((res) => {
//     console.log(res);
//     return 'SOME VAL2';
// }).then((res) => {
//     console.log(res);
// })

// 6
// const firstPromise = new Promise((resolve, reject) => {
//     resolve('First');
// })

// const secoundPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secoundPromise.then((res) => {
//     return res;
// })
// .then((res) => console.log(res))

// 7
// write a function that can resolve promises recursivelly

const p1 = new Promise((resolve, reject) => {
    resolve('p1');
});
const p2 = new Promise((resolve, reject) => {
    resolve('p2');
});
const p3 = new Promise((resolve, reject) => {
    resolve('p3');
});
// resolveRecursively([p1, p2, p3]);
// function resolveRecursively(arrOfPromises) {
//     if (arrOfPromises.length === 0) return;
//     const currentPromise = arrOfPromises.shift();
//     currentPromise.then((res) => console.log(res)).catch((err) => console.log(err));
//     resolveRecursively(arrOfPromises);
// }

// 8
// inside async function if JS found await which return promise then only JS suspend that function
// otherwise execute in normal synchronous flow
async function loopWithAwait(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log('Test Log')
        await processData(arr[i]);
        console.log('After Data Proceed');
    }
    return 'All Item Iterate';
}

async function processData(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`proceed data ${val}`), 2000);
    })
}

const elemets = [1, 2, 3, 4];
const output = loopWithAwait(elemets);
console.log('Sync code After');
output.then((res) => console.log('res', res));