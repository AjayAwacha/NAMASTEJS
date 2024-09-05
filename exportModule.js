// in js there are two type of export 
// 1. Named export 2. default export

// Named export allow you to export multiple values

// export const value1 = 'value1';
// export const fun1 = function() {
//     console.log('i am Function1');
// }
// export function myNamedFunction() {
//     console.log('This is Named exported Function');
// }

const value2 = 'value2';
const fun2 = function() {
    console.log('i am Function2');
}
function myNamedFunction2() {
    console.log('My myNamedFunction2 Exported');
}
export {
    value2,
    fun2,
    myNamedFunction2
}

// default export allow you to export single value
// export default {
//     value1,
//     fun1,
//     value2,
//     fun2
// }
