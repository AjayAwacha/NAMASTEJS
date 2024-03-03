// like object map also maintain elements in key value pair
// diff is map key can be any type and map also maintain order on key

const myMap = new Map();

myMap.set(1, 1);
myMap.set('2', '2');
myMap.set(true, true);

console.log(myMap);

console.log(myMap.get(1));
console.log(myMap.get('2'));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has('1'));

// console.log('forEach Elements')
// myMap.forEach((val, key) => {
//     console.log(val, key);
// })

// console.log('using for of')
// for(const [key, value] of myMap) {
//     console.log(key, value);
// }

// console.log('using map key')
// for(const data of myMap.keys()) {
//     console.log(data);
// }

console.log('using map values')
for(const data of myMap.values()) {
    console.log(data);
}

// way of creating map
const map1 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
console.log(map1);

map1.delete('key1');
console.log(map1);

map1.clear();
console.log(map1.size);


