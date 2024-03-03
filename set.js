// unlike array set contain unique elements
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add('Ajay');
mySet.add(1); // this will not add

console.log(mySet);

console.log(mySet.size);

console.log(mySet.has(1));
console.log(mySet.has(10));

for(const ele of mySet) {
    console.log(ele);
}

mySet.delete(1);

console.log(mySet);

mySet.clear();
console.log(mySet.size);

// 1. convert Array into Set
const arr = [1, 2, 3, 3, 2];
const set1 = new Set(arr);
console.log(set1);

// 2. convert set into Array
const set2 = new Set([1, 2, 3]);
const arr2 = [...set2];
console.log(arr2);

