// Import Named exports
// import {value1, fun1, value2, fun2 } from './exportModule.js';
// console.log(value1);
// fun1();
// console.log(value2);
// fun2();

// import all named exports in single object
// import * as allNamed from './exportModule.js';
// console.log(allNamed.value1);
// allNamed.fun1();
// console.log(allNamed.value2);
// allNamed.fun2();

// change name of named export
// import {value1 as value1Edited } from './exportModule.js';
// console.log(value1Edited);


// import default export
// import defaultData from './exportModule.js';

// console.log(defaultData.value1);
// defaultData.fun1();
// console.log(defaultData.value2);
// defaultData.fun2();

// we can also import named and default exports
import defaultObj, {value1, fun1, value2, fun2} from './exportModule.js';
console.log(defaultObj.value1);
defaultObj.fun1();
console.log(defaultObj.value2);
defaultObj.fun2();

console.log(value1);
fun1();
console.log(value2);
fun2();

