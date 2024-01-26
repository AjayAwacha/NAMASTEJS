// Find Max Number i array
// const arr = [2, 4, 0, 4, 6];

// function findMax(maxVal, current) {
//     if (maxVal < current) maxVal = current;
//     return maxVal;
// }
// const output = arr.reduce(findMax, 0);
// console.log(output);

// create object contain {26: 2, }
// const users = [
//     {firstName: 'Ajay', lastName: 'Awachar', age: 26},
//     {firstName: 'Sopan', lastName: 'Renge', age: 27},
//     {firstName: 'Dipak', lastName: 'Renge', age: 28},
//     {firstName: 'Vaibhav', lastName: 'Yadav', age: 26}
// ];

// function ageList(initial, current) {
//     const age = current.age;
//     initial[age] = (initial[age] || 0 ) + 1;
//     return initial;
// }

// const output = users.reduce(ageList, {});
// console.log(output);


// create array contain all user fisrtname which age is less then 30
const users = [
    {firstName: 'Ajay', lastName: 'Awachar', age: 26},
    {firstName: 'Sopan', lastName: 'Renge', age: 75},
    {firstName: 'Dipak', lastName: 'Renge', age: 50},
    {firstName: 'Vaibhav', lastName: 'Yadav', age: 26}
];

function lessThen30(ele) {
    if(ele.age < 30) {
        return ele;
    };
}

function formateObject(ele) {
    return ele.firstName;
}
const output = users.filter(lessThen30).map(formateObject);
console.log(output);
