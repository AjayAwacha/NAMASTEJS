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
    console.log('Iteration', key, obj4[key]);
}

//Question5
const a = {};
const b = {key: 'value'};
const c = {key: 'value'};
a[b] = 123;
a[c] = 456;
console.log(a[b]);
console.log(a[c]);

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

const test3 = test1;
console.log(test1 == test3);
console.log(test1 === test3);

// we can not compare object in js using == or === because they are reference type
// even both object property and value are same they give false they only check reference not value
// two compare two object you have to define your custom function

//Question11
let person = {
    king: 'Ajay Awachar'
};
const member = [person];
console.log('member ', member);
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
console.log(objTest1 == objTest2);
console.log(objTest1 === objTest2);


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



// create function to compare two object
function compareObj(obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') throw new Error('parameter must of type object');

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for(const key in obj1) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!compareObj(obj1[key], obj2[key])) return false;
        } else if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true;
}

const obj11 = {
    key1: 'value1'
}
const obj22 = {
    key1: 'value1'
}
const resultggg = compareObj(obj11, obj22);
console.log('resultggg  ', resultggg);





















// create function to compare two object
// function compareObj(obj1, obj2) {
//     if (typeof obj1 !== 'object' || typeof obj2 !== 'object') throw TypeError('parameter must type of object');

//     if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//     for(const key in obj1) {
//         if (!obj2.hasOwnProperty(key)) return false;

//         if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
//             if (!compareObj(obj1[key], obj2[key])) {
//                 return false;
//             }
//         } else if (obj1[key] !== obj2[key]) {
//             return false
//         }
//     }
//     return true;
// }
// const obj11 = {
//     key1: 'value1'
// }
// const obj22 = {
//     key1: 'value2'
// }
// compareObj(obj11, obj22);