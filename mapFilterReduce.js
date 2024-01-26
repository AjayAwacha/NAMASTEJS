// Map
const arr = [1, 2, 3, 4];
const mapArr = arr.map((ele, i, arr) => {
    return ele * 6;
});
// console.log(mapArr);

// Filter
const filterArr = arr.filter((ele, i, arr) => {
    return ele > 2;
});
// console.log(filterArr);

// Reduce
const reduceArr = arr.reduce((acc, ele, i, arr) => {
    return acc + ele;
}, 0);
// console.log(reduceArr);

// Polyfill for map
Array.prototype.myMap = function(callback) {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}
const myMapResult = arr.myMap((ele, i, arr) => {
    return ele * 6;
});
console.log('polyfill of map ', myMapResult);

// Polyfill for filter
Array.prototype.myFilter = function(callback) {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
const myFilterResult = arr.myFilter((ele, i, arr) => {
    return ele > 2;
});
console.log('Polyfill of filter', myFilterResult);

// Polyfill of reduce
Array.prototype.myReduce = function(callback, initial) {
    let value = initial;
    for(let i = 0; i < this.length; i++) {
        value = callback(value, this[i], i, this);
    }
    return value;
}
const myReduceResult = arr.myReduce((acc, ele, i, arr) => {
    return acc + ele;
}, 0);
console.log('myReduceResult ', myReduceResult);

const students = [
    {name: 'Ajay', age: 23, marks: 100},
    {name: 'Sopan', age: 24, marks: 200},
    {name: 'Laxman', age: 25, marks: 300}
];
// question1
// return array contains names in capital letter
const result1 = students.map((ele) => ele.name.toUpperCase());
console.log(result1);

// question2
// return students marks grater then 150
const result2 = students.filter((ele) => ele.marks > 150);
console.log(result2);

// question3
// sum of marks
const result3 = students.reduce((acc, ele) => {
    return acc + ele.marks;
}, 0);
console.log(result3);

// questions4
// retun name of students who scored more then 150
const result4 = students.filter((ele) => ele.marks > 150).map((ele) => ele.name);
console.log(result4);

// IIFE
(function testIIFE(x) {
    console.log('IIFE execute', x);
})(1);

(function test2IIFE(x) {
    (function(y) {
        console.log(y);
        console.log(x);
    })(2);
})(1);

// Function scope
// var are function in scope

var a = 1;
var b = 2;
function variableShadow() {
    var a = 3;
    var b = 4;
    console.log(a, b);
}
variableShadow();
console.log(a, b);

// for(let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }
// output 0 1 2 3 4 because let are block scope seprate copy created and share for each block

// for(var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }
// output 5 5 5 5 var are function in scope, means for all block share same variable location

var p = 6;
function output1() {
    console.log(p);
    var p = 60;
}
output1();

const [x, y] = [10, 20];   // de-structuring
console.log(x);
console.log(y);

// rest parameters
// rest parameter must last parameter


