
let a = 10;
function clouserEx() {
    let b = 20;
    return function() {
        let c = 30;
        console.log(a, b, c);
    }
}
clouserEx()();

//Question1
let p = 0;
(function() {
    if (p === 0) {
        let p = 1;
        console.log(p);
    }
    console.log(p);
})();

// Question2
const addSix = createBase(6);
addSix(10);
addSix(21);

function createBase(x) {
    return function(y) {
        console.log(x + y);
    }
}

// Optimize time
function getIndexSquare(x) {
    const arr = [];
    for(let i = 0; i < 10000000; i++) {
        arr[i] = i * i;
    }
    return arr[x];
}

const startTime = new Date();
const data = getIndexSquare(500);
const endTime = new Date();
console.log(data);
const timetake = endTime - startTime;
console.log('time take1 ', timetake);

function timeOptimization() {
    const a = [];
    for(let i = 0; i < 10000000; i++) {
        a[i] = i * i;
    }

    return function(x) {
        if (a[x]) return a[x];
    }
}

const optimizedFun = timeOptimization();
const startTime3 = new Date();
const data3 = optimizedFun(500);
const endTime3 = new Date();
console.log(data3);
const timetake3 = endTime3 - startTime3;
console.log('time take3 ', timetake3);

//Question2
// use var and print 0 1 2
function scope() {
    for(var i = 0; i < 3; i++) {
        function inner(x) {
            setTimeout(() => {
                console.log(x);
            }, 1000);
        }
        inner(i);
    }
}
scope();

// clouser are used to create private variable
function privateCounter() {
    let _counter = 0;

    function increase() {
        _counter = _counter + 1;
    }

    function decrease() {
        _counter = _counter - 1;
    }

    function display() {
        console.log('counter is', _counter);
    }

    return {
        increase,
        decrease,
        display
    }
}
const count = privateCounter();
count.increase();
count.increase();
count.decrease();
count.display();

// Implement memorization function in js

function heavyFunction(x, y) {
    for(let i = 0; i < 10000; i++) {};
    return x + y;
}

function memorization(fun) {
    const cache = {};

    return function(...args) {
        const parameter = JSON.stringify(args);
        if (cache[parameter]) return cache[parameter];
        const data = fun.call(this, ...args);
        cache[parameter] = data;
        return data;
    }
}

const addMemorization = memorization(heavyFunction);
addMemorization(10, 20);
addMemorization(1, 1);
addMemorization(10, 20);

