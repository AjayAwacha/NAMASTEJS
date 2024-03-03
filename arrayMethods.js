const arr = ["a", "b", "c", "d"];

// const reduceTest = [1, 2, 3, 4];
// const addition = reduceTest.reduce((ele, accumulator) => accumulator + ele, 0);
// console.log(addition);

// slice -> don't change original array
// console.log(arr.slice(1, 3));
// console.log(arr.slice(1));
// console.log(arr.slice(-2));

// splice -> change original array
// -> remove element from original array
// console.log(arr.splice(2, 1));
// console.log(arr);
// console.log(arr.splice(-2));
// console.log(arr);
// console.log(arr.splice(1, 0, 'a1', 'a2'));
// console.log(arr);

// reverse -> change original array
// console.log(arr.reverse());
// console.log(arr);

// concate -> don't change original array
// const arr2 = ["m", "n", "o", "p"];
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);
// console.log(arr);
// console.log(arr2);

// join: convert array into string
// console.log(arr.join('*'));
// console.log(arr.join(' '));

// at method
// get element at specific index
// console.log(arr[0]);
// console.log(arr.at(0));

// get last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// loop array

// const arr3 = [100, 200, -40, 400, -300, -40];
// for(const [index, ele] of arr3.entries()) {
//     if (ele > 0) {
//         console.log(`movement ${index + 1} is credated and amount is ${ele}`);
//     } else {
//         console.log(`movement ${index + 1} is dibated and amount is ${Math.abs(ele)}`);
//     }
// }

// const arr3 = [100, 200, -40, 400, -300, -40];
// for(const index in arr3) {
//     console.log(`index of element is ${index} and element is ${arr3[index]}`);
// }

// arr3.forEach((ele, index, arr) => {
//     if (ele > 0) {
//         console.log(`movement ${index + 1} is credated and amount is ${ele}`);
//     } else {
//         console.log(`movement ${index + 1} is dibated and amount is ${Math.abs(ele)}`);
//     }
// });


// // forEach with map
const mapExample = new Map([
    ['flower','rose'],
    ['mk2','mv2'],
    ['mk3','mv3'],
    ['mk4','mv4']
]);
// console.log('ForEach on Map');
// mapExample.forEach((ele, index, map) => {
//     console.log(`element is ${ele} index ${index} map ${map}`);
// });

// // forEach with set
// const setExample = new Set(['set1', 'set2', 'set3', 'set4']);
// setExample.forEach((ele, index, set)=> {
//     console.log(`ele ${ele} index ${index} set ${set}`);
// });

// map method
// return new array by performing operation on each array element
// returned array length is same as original array length

const arr4 = [10, 20, 30, 60, 30];
// const newArr = arr4.map((ele, index, ar) => {
//     // console.log(ele, index, ...ar);
//     return ele * 2;
// });
// console.log('---------------------------------');
// console.log(arr4);
// console.log(newArr);

// same thing using for of loop
// const gfds = [];
// for(const ele of arr4) {
//     console.log(ele * 2);
//     gfds.push(ele * 2);
// }

const userNames = ['Ajay Sampatrao Awachar', 'Sopan Gulabrao Renge', 'Laxman Marotrao Chawan', 'Mangesh Balasaheb Zarkar'];

// we don't want to return any new array, we just want to iterate element 
// that's why using for of loop
for (const ele of userNames) {
    const name = ele.toLocaleLowerCase().split(' ').map((ele) => ele.at(0)).join('');
    // console.log(name);
}

// // filter method 
// // return a new array contain only values who pass the test

const filterArr = [200, 400, -500, 345, -700, 98];
const creditedArray = filterArr.filter(ele => ele > 0);
// console.log(creditedArray);

// reduce method
// reduce method iterate each array element and return only single value
const returnedElement = filterArr.reduce((accumulator, ele) => accumulator + ele, 0);
console.log(returnedElement);

//find method
//return array element who pass the test firstly
const transactions = [100, 10000, -700, 500, -1000];
const firstWidthdrow = transactions.find( ele => {
    if (ele < 0) {
        return ele
    }
});
// const firstWidthdrow = transactions.find( ele => ele < 0);
console.log(firstWidthdrow);

const accounts = [
    {
        holderName: 'Ajay Awachar',
        balance: 30
    },
    {
        holderName: 'Sopan Renge',
        balance: 40
    },
    {
        holderName: 'Kumar Sanu',
        balance: 50
    },
    {
        holderName: 'Kamlesh Yadav',
        balance: 600
    }
];
const accopuntInfo = accounts.find(ele => ele.holderName === 'Sopan Renge');
console.log(accopuntInfo);

// // findIndex Method
// // return index of single element who firstlly pass the test

// // Example if we want to delete element from array then we can delete
// // it by using splice method , but splice method need index of element
// const accountIndex = accounts.findIndex(ele => ele.holderName === 'Sopan Renge');
// console.log(accountIndex);
// console.log('Array before delete element', accounts);
// accounts.splice(accountIndex, 1);
// console.log('Array After delete element', accounts);

// // some method
// const isOneOfThemMoreThanHundredPresent = accounts.some( ele => ele.balance > 100);
// console.log(isOneOfThemMoreThanHundredPresent);

// const isAllMoreThanHundredPresent = accounts.every( ele => ele.balance > 1);
// console.log(isAllMoreThanHundredPresent);

const flatArray = [1, 2, [3, 4]];  // do not change original array
// console.log(flatArray.flat());
// console.log(flatArray);
// flat   [1, 2, [3, 4]] => [1, 2, 3, 4]

// flatMap => apply map first and then flat function on result array

// sort
// sort method change original array
// internally default behaviour of sort method is convert array elemnt into string and sort in assending order
const strArr = ['apple', 'mango', 'banana'];
// strArr.sort();
// console.log(strArr);

// this gives unexpected behaviour if array elements are of type number
const noArr = [30, 4, 21, 100];
// noArr.sort();
// console.log(noArr);

// to solve this we can pass callback function
// -1 means do not change 
// 1 means change element position
// const res = noArr.sort((a, b) => a - b );  // Assending
const res = noArr.sort((a, b) => b - a );  // Descding
console.log(res);

// if we want to sort string array in descding order
strArr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
});

const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'George', age: 28 }
];
const sortByAge = people.sort((a, b) => a.age - b.age);
console.log(sortByAge);
