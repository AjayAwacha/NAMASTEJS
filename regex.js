// regex is sequence of charecter that form search pattern
// there are two way to create regex 
// 1> string litral
const pattern1 = /hello/;
// 2> using RegExp object 
const pattern2 = new RegExp('hello');

// basic methods working with regex
let str = "Hello, world!";
const pattern3 = /hello/;
// test return true if pattern match with string
console.log(pattern3.test(str));
// with case insensative fage
const pattern4 = /hello/i;
console.log(pattern4.test(str));

// unlike test exec method return array if match pattern or null if not match
// generally we use this if we want more info about match
console.log(pattern4.exec(str))

// match method return array or null if not match
// but unlike exec match apply on string and pass regex pattern in it
console.log(str.match(pattern4));

// search method apply on string but unlike match it return index of matching pattern and return -1 if not match
console.log(str.search(pattern4));

const str2 = 'my Name is Name and i want';
const newStr2 = str2.replace(/name/gi, 'Ajay');
console.log(newStr2);

// some common flags in regex
// g => match globally
// i => check case insensitive

// metacharecter
// . => match any single charecter
// ^ => match begining input
// $ => match ending input
// * => match zero or more preceding element
// + => one or more preceding element
// ? => zero or one preceding element
// | => act as logical or
// [] match any charecter inside squere bracket
// [^] match any charecter except inside squere bracket
// [0-9]
// {n}: Matches exactly n occurrences of the preceding element. 
// {n,}: Matches n or more occurrences of the preceding element
// {n,m}: Matches between n and m occurrences of the preceding element
// ( ) groping => Groups multiple elements into a single element

// escape charecter \ used if we want to match / in staring