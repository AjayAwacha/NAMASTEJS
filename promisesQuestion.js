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

//3
// function job() {
//     return new Promise((resolve, reject) => {
//         resolve();
//     })
// }
// const promise1 = job();
// promise1.then(() => {
//     console.log('Success1');
// }).then(() => {
//     console.log('Success2');
// }).then(() => {
//     console.log('Success3');
// }).catch(() => {
//     console.log('Error1');
// }).then(() => {
//     console.log('Success4');
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
resolveRecursively([p1, p2, p3]);
function resolveRecursively(arrOfPromises) {
    if (arrOfPromises.length === 0) return;
    const currentPromise = arrOfPromises.shift();
    currentPromise.then((res) => console.log(res)).catch((err) => console.log(err));
    resolveRecursively(arrOfPromises);
}