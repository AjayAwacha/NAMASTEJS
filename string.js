const str = 'this is string example';

console.log(str[0]);

//indexof
console.log(str.indexOf('s'));

console.log(str.lastIndexOf('s'));

console.log(str.indexOf('z'));

// slice method
// not change original array
console.log(str.slice(5));

console.log(str.slice(5, 14));

console.log(str.slice(-7));

console.log(str.slice(-8, 20));

console.log(str.slice(-8, 10));

//toLowerCase
console.log(str.toLowerCase());

console.log(str.toUpperCase());

const name = 'ajay Awachar is';
console.log(`${name[0].toUpperCase()}${name.slice(1)}`);

const email = 'ajayawachar400@gmail.com';
const newemail = '   AjayAwachar400@gmail.com   ';
// toLowerCase, toUpperCase, trim not change original string
console.log(newemail.toLowerCase());
console.log(newemail.trim());

const formatedEmail = newemail.toLowerCase().trim();
console.log(email === newemail);
console.log(email === formatedEmail);

const ajay = 'this is my name string';
console.log(ajay.replace('my', 'your'));
console.log(ajay);

console.log(ajay.includes('is'));

console.log(ajay.startsWith('t'));

// replace globally
const concurent = 'this is good string i want to repalce good gdgd good sdf good';
console.log(concurent.replace('good', 'best'));
console.log(concurent.replace(/good/g, 'best')); // using regular expression we can replace globally

const fullName = 'Ajay Sampatrao Awachar';
console.log(fullName.split(' '));

console.log(['Kumar', 'Sanjay', 'Danadesh'].join(' '));

const paddExample = 45657568678;

const maskCC = function(ccNo) {
    const no = ccNo + '';
    const lastFourDigit = no.slice(-4);
    return lastFourDigit.padStart(no.length, '*');
}
console.log(maskCC(9876567654));


const challangeString = ` first_name
Some_Variable
 calculate_AGE
delayed_departure`;

const seprateString = challangeString.split(`\n`);

for(const name of seprateString) {
    let [firstName, lastName] = name.trim().toLowerCase().split('_');
    lastName = lastName?.[0].toUpperCase() + lastName.slice(1);
    console.log(firstName + '' + lastName);
}
