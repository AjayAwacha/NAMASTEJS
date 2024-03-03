const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2));

// polyfill for includes method
Array.prototype.includes2 = function(val) {
    for(let i = 0; i < this.length; i++) {
        if (this[i] === val) return true;
    }
    return false;
}
console.log(arr.includes2(2));

// polyfill for map method
Array.prototype.myMap = function(callback, argThis) {
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be function')
    }
    let result = [];
    for(let i = 0; i < this.length; i++) {
        const output = callback.call(argThis, this[i], i, this);
        result.push(output);
    }
    return result;
}

const mapCallback = function(element, index, actualArray) {
    return element * 2;
}
const newArray = arr.myMap(mapCallback);
console.log('newArray ', newArray);

// polyfill for filter
const filterCallback = (ele, index, arr) => {
    return ele > 4;
}
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback, argThis) {
        if (typeof callback !== 'function') throw TypeError('callback must be function');
        let result = [];
        for(let i = 0; i < this.length; i++) {
            const output = callback.call(argThis, this[i], i, this);
            if (output) result.push(this[i]);
        }
        return result;
    }
}
const filterResult = arr.myFilter(filterCallback);
console.log('filterResult ', filterResult);

// polyfill for find method
const findCallback = (element, index, array) => {
    return element > 4;
}
if (!Array.prototype.myFind) {
    Array.prototype.myFind = function(callback, argThis) {
        let result = undefined;
        for(let i = 0; i < this.length; i++) {
            const output = callback.call(argThis, this[i], i, this);
            if (output) return this[i];
        }
        return result;
    }
}
const findResult = arr.myFind(findCallback);
console.log('findResult ', findResult);

// polyfill for reduce method
const reduceCallback = (initial, element, index, array) => {
    return initial + element;
}
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initialValue, argThis) {
        if (typeof callback !== 'function') throw new TypeError('callback must be type function');
        // update this condition
        // if (!(!this[0] && initialValue === undefined)) throw TypeError('myReduce apply on array and must have at least one element');
        if (initialValue === undefined) initialValue = this[0];
        let result = initialValue;
        for(let i = 0; i < this.length; i++) {
            const output = callback.call(argThis, result, this[i], i, this);
            result = output;
        }
        return result;
    }
}
const reduceResult = arr.myReduce(reduceCallback, 0);
console.log('reduceResult ', reduceResult);

// polyfill for some
const callbackSome = (element, index, array) => {
    return element > 10;
}
if (!Array.prototype.mySome) {
    Array.prototype.mySome = function(callback, argThis) {
        if (typeof callback !== 'function') throw new TypeError('callback must be type function');
        let result = false;
        for(let i = 0; i < this.length; i++) {
            const output = callback.call(argThis, this[i], i, this);
            if (output) return true;
        }
        return result;
    }
}
const someResult = arr.mySome(callbackSome);
console.log('someResult ', someResult);

// polyfill for every
const callbackevery = (element, index, array) => {
    return element > 0;
}
if (!Array.prototype.myEvery) {
    Array.prototype.myEvery = function(callback, argThis) {
        if (typeof callback !== 'function') throw new TypeError('callback must be type function');
        let result = true;
        for(let i = 0; i < this.length; i++) {
            const output = callback.call(argThis, this[i], i, this);
            if (!output) return false;
        }
        return result;
    }
}
const everyResult = arr.myEvery(callbackevery);
console.log('everyResult ', everyResult);


// polyfill for Promise.all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1')
    }, 5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2')
    }, 5000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P3')
    }, 5000)
});

// we have to use Promise.myAll here not Promise.prototype.myAll
// if we add method with .prototype then they are available inside their object
// here i want to use like static method

// Behavious => Promise.all() resolve when all promises are resolve and reject when any one of them is reject
if(!Promise.myAll) {
    Promise.myAll = function(arrOfPromise) {
        const resolvedPromises = [];
        let resolveCount = 0;
        return new Promise((resolve, reject) => {
            for(let i = 0; i < arrOfPromise.length; i++) {
                const currentPromise = arrOfPromise[i];
                currentPromise.then((res) => {
                    resolveCount++;
                    resolvedPromises.push(res);
                    if (resolveCount === arrOfPromise.length) resolve(resolvedPromises);
                })
                .catch((err) => {
                    reject(err);
                })
            }
        })
    }
}
// const myAllEx = Promise.myAll([p1, p2, p3]);
// myAllEx.then((res) => {
//     console.log('Promise Success', res)
// })
// .catch((err) => {
//     console.log('Promise Fail ', err)
// })


// polyfill for Promise.allSettled([])
// Behavious => return promise contain result of all promise which either resolve or reject
if(!Promise.myAllSettled) {
    Promise.myAllSettled = function(arrOfPromise) {
        const promiseResult = [];
        let promiseCount = 0;
        return new Promise((resolve, reject) => {
            for(let i = 0; i < arrOfPromise.length; i++) {
                const currentPromise = arrOfPromise[i];
                currentPromise.then((res) => {
                    promiseCount++;
                    promiseResult.push(res);
                    if (promiseCount === arrOfPromise.length) resolve(promiseResult);
                })
                .catch((err) => {
                    promiseCount++;
                    promiseResult.push(err);
                    if (promiseCount === arrOfPromise.length) resolve(promiseResult);
                })
            }
        })
    }
}
const myAllSettledPromise = Promise.myAllSettled([p1, p2, p3]);
myAllSettledPromise.then((res) => {
    console.log('myAllSettled Success', res)
})
.catch((err) => {
    console.log('myAllSettled Fail ', err)
})