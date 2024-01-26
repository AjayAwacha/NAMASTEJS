// synchronous vs asynchronous code

// console.log('Start');
// function fetchData() {
//     setTimeout(() => {
//         return 'Backend data';
//     }, 1000);
// }
// const data = fetchData();
// console.log(data);
// console.log('End');

// to solve this problem we can use callback function

// console.log('Start');
// function importantAction(cb) {
//     setTimeout(() => {
//         cb('Backend Data');
//     }, 1000);
// }
// const data = importantAction((msg) => {
//     console.log(msg);
// });
// console.log('End');

// there is problem with callback
// if multiple asynchronous operation are depands on each other then it lead to callback hell

// console.log('Start');
// function importantAction(cb) {
//     setTimeout(() => {
//         cb('importantAction');
//     }, 1000);
// }
// function likeTheVideo(cb) {
//     setTimeout(() => {
//         cb('likeTheVideo');
//     }, 1000);
// }
// function subscribeTheVodeo(cb) {
//     setTimeout(() => {
//         cb('subscribeTheVodeo');
//     }, 1000);
// }
// function shareTheVodeo(cb) {
//     setTimeout(() => {
//         cb('shareTheVodeo');
//     }, 1000);
// }
// const data = importantAction((msg) => {
//     console.log(msg);
//     likeTheVideo((msg) => {
//         console.log(msg);
//         subscribeTheVodeo((msg) => {
//             console.log(msg);
//             shareTheVodeo((msg) => {
//                 console.log(msg);
//             })
//         })
//     })
// });
// console.log('End');

// to solve this problem using primises
// IMP: Promise start executing when it get declared
console.log('Start');
function importantAction() {
    return new Promise((resolve, reject) => {
        const status = false;
        setTimeout(() => {
            if (status) {
                resolve('importantAction Success');
            } else {
                reject('importantAction Fail')
            }
        }, 1000);
    });
}
function likeTheVideo() {
    return new Promise((resolve, reject) => {
        const status = false;
        setTimeout(() => {
            if (status) {
                resolve('likeTheVideo Success');
            } else {
                reject('likeTheVideo Fail')
            }
        }, 2000);
    });
}
function subscribeTheVodeo() {
    return new Promise((resolve, reject) => {
        const status = false;
        setTimeout(() => {
            if (status) {
                resolve('subscribeTheVodeo Success');
            } else {
                reject('subscribeTheVodeo Fail')
            }
        }, 3000);
    });
}
function shareTheVodeo() {
    return new Promise((resolve, reject) => {
        const status = false;
        setTimeout(() => {
            if (status) {
                resolve('shareTheVodeo Success');
            } else {
                reject('shareTheVodeo Fail')
            }
        }, 500);
    });
}
// importantAction().then((msg) => {
//     console.log(msg);
//     return likeTheVideo();
// }).then((msg) => {
//     console.log(msg);
//     return subscribeTheVodeo();
// }).then((msg) => {
//     console.log(msg);
//     return shareTheVodeo();
// }).then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log('err ', err);
// })

console.log('End');

// static methods in Promise

// 1>
// create promise which is already resolve
// Promise.resolve('Promise Resolve').then((msg) => {
//     console.log(msg);
// });

// 2>
// create promise which is already reject
// Promise.reject('Promise Reject').then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// });

// 3>
// Promise.all resolve when all promises are resolve and reject when any of promise are reject
// const promiseAllResult = Promise.all([importantAction(), likeTheVideo(), subscribeTheVodeo(), shareTheVodeo()]);
// promiseAllResult.then((res) => {
//     console.log('all Resolve ', res);
// }).catch((err) => {
//     console.log('all Reject ', err);
// });

// 4>
// Promise.race return promise which is resolve when first promise is resolve and reject when first promise is reject
// Promise.race(
//     [importantAction(), likeTheVideo(), subscribeTheVodeo(), shareTheVodeo()]
// ).then((msg) => {
//     console.log('Race Resolve ', msg);
// }).catch((err) => {
//     console.log('Race Reject ', err);
// });

// 5>
// Promise.allSettled promise return all success and fail promises
// const promiseAllResult = Promise.allSettled([importantAction(), likeTheVideo(), subscribeTheVodeo(), shareTheVodeo()]);
// promiseAllResult.then((res) => {
//     console.log('allSettle Resolve ', res);
// }).catch((err) => {
//     console.log('allSettle Reject ', err);
// });

// 6>
// Promise.any
// return single promise which is resolve first and reject when all are reject
// const promiseAllResult = Promise.any([importantAction(), likeTheVideo(), subscribeTheVodeo(), shareTheVodeo()]);
// promiseAllResult.then((res) => {
//     console.log('any success ', res);
// }).catch((err) => {
//     console.log('any fail ', err);
// });

// async and await
// async and await are keyword that help to handle promises in better way
// const result = async () => {
//     try {
//         const msg1 = await importantAction();
//         const msg2 = await likeTheVideo();
//         const msg3 = await subscribeTheVodeo();
//         const msg4 = await shareTheVodeo();
//         console.log({ msg1, msg2, msg3, msg4 });
//     } catch (err) {
//         console.log('Error ', err);
//     }
// }
// result();
