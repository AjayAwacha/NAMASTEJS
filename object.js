//Question1
const output = (function(x) {
    delete x;  // delete only used to delete object property not varaible
    return x;
})(6);
console.log(output);

//Question2
// how to add key like (my name is) in object
const obj = {
    'my Name is': 'Ajay'
};
console.log(obj['my Name is']);

//Question3
// how to add dynamic property like
const propName = 'myProperty';
const propValue = 'myValue';
const obj2 = {
    propName: propValue
}
console.log(obj2);
const obj3 = {
    [propName]: propValue
}
console.log(obj3);

//Question4
// iterate object property
const obj4 = {
    first: 'first',
    secound: 'secound',
    third: 'third',
    fourth: 'fourth',
}
for(let key in obj4) {
    console.log(key, obj4[key]);
}

//Question5
const a = {};
const b = {key: 'value'};
const c = {key: 'value'};
a[b] = 123;
a[c] = 456;
console.log(a[b]);

//Question6
//what is JSON.stringfy and JSON.parse method
//can be use to store data in local stoare

const obj5 = {
    key: 'value'
};
const data = JSON.stringify(obj5);
console.log(data);
console.log(JSON.parse(data));

//Question7
//spread operator
const user = {
    name: 'Ajay', surname: 'Awachar'
};
const admin = {
    admin: true,
    // user
    ...user
}
console.log(admin);

//Question8
//de-structing
const {name, surname: lastName } = user;
console.log(name);
console.log(lastName);

const { address: {city}} = {
    address: {
        state: 'maharastra',
        city: 'pune',
    }
}
console.log(city);

//Question9
// rest parameter must last parameter
// spread operator can be anywhere
function getIntem(a, b, ...fruits) {
    return [a, ...fruits, b];
}
const result = getIntem('apple', 'banana', 'orange', 'mango', 'date');
console.log(result);

//Question10
//comparing object
const test1 = {key: 'val'};
const test2 = {key: 'val'};
console.log(test1 == test2);
console.log(test1 === test2);

//Question11
let person = {
    kjhg: 'Ajay Awachar'
};
const member = [person];
person = null;  // not affect to array
console.log(member);

//Question12
function changeReference(objTest) {
    objTest.age = 26;
    objTest = {       // assign new object not affect original reference
        name: 'Sopan',
        age: 29
    };
    return objTest;
}
const objTest1 = {
    name: 'Ajay',
    age: 30
}
const objTest2 = changeReference(objTest1);
console.log(objTest1);
console.log(objTest2);

//Question13
//shallow and deep copy
const obj6 = {
    key: 'val678'
}
// const obj7 = obj6;  // shallow copy
// obj7.key = 'edited';

// const obj7 = Object.assign(obj6);  // shallow copy
// obj7.key = 'edited';

// const obj7 = Object.assign({}, obj6);  // one level deep copy
// obj7.key = 'edited';

// const obj7 = {...obj6};  // one level deep copy
// obj7.key = 'edited';

const obj7 = JSON.parse(JSON.stringify(obj6));  // nested level deep copy
obj7.key = 'edited';

console.log(obj6);
console.log(obj7);
