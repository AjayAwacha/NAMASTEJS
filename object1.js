// way of creating object in js
// 1. Object litral
const obj1 = {};
console.log(obj1.__proto__ === Object.prototype);

// 2. using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function() {
        console.log(`my name is ${this.name} and age is ${this.age}`);
    }
}
const obj2 = new Person('p1', 27);
console.log(obj2.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// 3. using new Object()
const obj3 = new Object();
console.log(obj3.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null)

// 4. uisng Object.create()
// allow you to create object with given prototype object and properties
const tempObj = {
    prop1 : 'previous old object'
}
const obj4 = Object.create(tempObj, {
    name: {
      value: 'Alice',
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: {
      value: 30,
      writable: true,
      enumerable: true,
      configurable: true
    }
});
console.log(obj4.__proto__ === tempObj);
console.log(tempObj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// 5. ES6 classes
class MyClass {
    constructor() {
      this.property1 = "value1";
      this.property2 = "value2";
    }
}
  
const obj5 = new MyClass();
console.log(obj5.__proto__ === MyClass.prototype);
console.log(MyClass.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// some properties available in Object class
// 1> Object.assign
// copy all source object property into target object
const source = { b: 4, c: 5 };
const target = { a: 1, b: 2 };
const returnedObj = Object.assign(target, source);
console.log('target ', target);
console.log('source ', source);
console.log('returnedObj ', returnedObj);
// source object did not change
// Object.assign({}, obj) // create one level deep copy

// 2> Object.create
// create new object with given prototype object and properties
const person = {
  hand: 2,
  nose: 1
};
const ajay = Object.create(person);
console.log(ajay.__proto__ === person);
console.log(person.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// 3> Object.entries
// return an array in that array for each key value there ia subarray
const objEntries = Object.entries(person);
console.log('objEntries ', objEntries);

// 4> Object.keys
// return an array contain keys only
console.log(Object.keys(person));

// 4> Object.values
// return an array contain value only
console.log(Object.values(person));

// 5> obj.hasOwnProperty
// hasOwnProperty return true or false
// hasOwnProperty avaiable in Object.prototype
console.log(person.hasOwnProperty('hand'));

// Access Object Property
const obj = {
  firstName: 'Ajay',
  lastName: 'Awachar',
  age: '25',
  job: 'Software developer',
  friends: ['sopan', 'Deepak', 'shubham', 'Suraj']
};

console.log(obj.firstName);  // using . notation
console.log(obj['this is my']) // bracket 
// bracket nonation are used to access property dynamically
const propName = 'firstName';
const name = "Name";
console.log(obj[propName]);
console.log(obj['first' + name]);

// setting and key and value dynamically in Object
const dKey = 'dynamicKey';
const dValue = 'dynamicValue';
const dynamic = {
  hardCodeKey: 'hardCodeValue',
  [dKey]: dValue
}
console.log(dynamic);

// Adding Object into another object
const timimg = {
  mon: {
    open: 10,
    close: 11
  },
  tue: {
    open: 10,
    close: 11
  }
}
const addData = {
  name: 'Ajay Awachar',
  class: 'Gumrah',
  expression: 34,
  //old way of adding object
  // newAddedObject: timimg
  // timimg: timimg

  //new way of adding object
  // timimg

  // want to add content of object
  ...timimg
}
console.log(addData);

// Object destructing

const objDestructing = {
  userName: 'Ajay Awachar',
  friends: ['Sopan', 'Deepak', 'Laxman', 'Kelash'],
  food: {
      breakfast: ['wadasamber', 'meduwada'],
      lunch: ['riceplate', 'dalkhichadi']
  }
}
// const {userName, friends} = objDestructing;
// console.log(userName, friends);

// const {userName: clientName, friends: friendList} = objDestructing;
// console.log(clientName, friendList);

const {userName: clientName = 'Guest Client', friends: friendList} = objDestructing;
console.log(clientName, friendList);

let a = 100;
let b = 200;
const objDestructing2 = {a: 10, b: 20, c: 30};
const {a: mya, b: myb} = objDestructing2;  // a and b value not change
console.log(mya, myb);
console.log(a, b);

// passing obj in function
const objDestructing3 = {
  firstName: 'Ajay',
  middlename: 'Sampatrao',
  lastname: 'Awachar',
  age: 25
};
function useObjdata({firstName = 'Default FName', age = 15, lastname = 'DeafultLastname', middlename}) {
  // or we can de-structure here
  console.log(firstName);
  console.log(age);
  console.log(lastname);
  console.log(middlename);
}
useObjdata(objDestructing3);

//Iterating Object
// we can iterate object using Object.keys, Object.values, Object.entries
// const convertToArr = Object.keys(objDestructing3);
// for(const data of convertToArr) {
//   console.log(`object key is ${data} and value is ${objDestructing3[data]}`);
// }

// const convertToArr = Object.values(objDestructing3);
// for(const data of convertToArr) {
//   console.log(`object value is ${data}`);
// }

// const convertToArr = Object.entries(objDestructing3);
// for(const [key, val] of convertToArr) {
//   console.log(`object key is ${key} and value is ${val}`);
// }


