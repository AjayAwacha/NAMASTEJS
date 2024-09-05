// difference between && ?.(optional chaining)
// the difference between && and ?. is that both execute from left to right. 
// The && operator returns the first falsy value (such as NaN, '', 0, false, null, or undefined) or the last truthy value if all are truthy.
// On the other hand, the ?. check property if property not present it returns undefined.
//   Otherwise, it returns the value of the last property
const obj = {
    key: 0
}
const logicalAnd = obj && obj.key && obj.key.jhg;
console.log(logicalAnd);

const optionalChain = obj?.key?.jhg?.ssds;
console.log(optionalChain);

// or operator return first truthy value otherwise return last value
console.log(0 || 'ajay');
console.log(undefined || 0);
console.log('ajay' || 0);
console.log(0 || undefined);

// && operator return first falsy value or last truthy if all are true
console.log(0 && 'ajay');
console.log('ajay' && 0);
console.log(undefined && 0);
console.log(0 && undefined);

// combination of && and ||
console.log('true' && false || 56);
console.log('true' && undefined || 56);
console.log(undefined && true || 56);
console.log(false && false || 67);
console.log(true && 'true' || 78);

// Nulish Operator
// its work same like or but it conside only null/undefined as falsy value not 0/NaN/false/''
// const val = 0;
// const val = 10 * 'dff';
// const val = false;
// const val = '';
// const val = null;
// const val = undefined;
// const val = 10 + (+'10');
// console.log('Result ', val ?? 10);

// argument parameter
function outer(a) {
    console.log(arguments[0]); 

    return function() {
        console.log(arguments[0]);  // inner function have its own argument
                                    // object
        console.log(a);
    }
}
const clouser = outer(10);
clouser();
