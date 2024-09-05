//1
// console.log('Start');  // 1 
// const promise = new Promise((resolve, reject) => {
//     console.log('1');  // 2
//     resolve('2');
//     console.log('3');  // 3
// });
// promise.then((res) => {
//     console.log(res);  // 5
// });
// console.log('End');  // 4

// Note: promise constructor is start executing when it defined and execute synchronously

//2
// console.log('Start');            // 1
// const f = () => {
//     return new Promise((resolve, reject) => {
//         console.log('1');               // 3
//         resolve('Success');
//     })
// }
// console.log('Middle');                // 2
// f().then((res) => {
//     console.log(res);                 // 5
// });
// console.log('End');            // 4

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

// const p1 = new Promise((resolve, reject) => {
//     resolve('p1');
// });
// const p2 = new Promise((resolve, reject) => {
//     resolve('p2');
// });
// const p3 = new Promise((resolve, reject) => {
//     resolve('p3');
// });
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
// async function loopWithAwait(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log('Test Log')
//         await processData(arr[i]);
//         console.log('After Data Proceed');
//     }
//     return 'All Item Iterate';
// }

// async function processData(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`proceed data ${val}`), 2000);
//     })
// }

// const elemets = [1, 2, 3, 4];
// const output = loopWithAwait(elemets);
// console.log('Sync code After');
// output.then((res) => console.log('res', res));



// implement polyfill for Promise.all()

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1 resolve')
    }, 4000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 Resolve');
    }, 1000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3 resolve');
    }, 3000)
});

// const promiseAll = Promise.race([p1, p2, p3]);
// promiseAll
// .then((res) => console.log('Success ', res))
// .catch((err) => console.log('err ', err));

Promise.myRace = function(arrPromise) {
    return new Promise((resolve, reject) => {
        // const responsePromoses = [];
        // let count = 0;
        for(let i = 0; i < arrPromise.length; i++) {
            arrPromise[i]
            .then((res) => {
                resolve(res);
                // count++;
                // responsePromoses.push({
                //     status: 'fulfilled',
                //     value: res
                // });
                // if (count === arrPromise.length) {
                //     resolve(responsePromoses);
                // }
            })
            .catch((err) => {
                reject(err);
                // count++;
                // responsePromoses.push({
                //     status: 'rejected',
                //     reason: err
                // });
                // if (count === arrPromise.length) {
                //     resolve(responsePromoses);
                // }
            });
        }
    })
}

const promiseAll = Promise.myRace([p1, p2, p3]);
promiseAll
.then((res) => console.log('Success ', res))
.catch((err) => console.log('err ', err));
