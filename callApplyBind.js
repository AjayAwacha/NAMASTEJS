
// what is call
const user = {name: 'Ajay'};
function msg(age, profession) {
    console.log(`Hello my name is ${this.name} and my age is ${age} and i am ${profession}`);
}
msg.call(user, 26, 'Software Engineer');

// what is apply
msg.apply(user, [26, 'Software Engineer']);

// what is bind
const bindFun = msg.bind(user);
bindFun(26, 'Software Engineer');
bindFun(27, 'Farmer');

//Question1
const person = {name: 'Ajay'};
function display(age, profession) {
    console.log(`Hello my name is ${this.name} and my age is ${age} and i am ${profession}`);
}
console.log(display.call(person, 26, 'SE'));
console.log(display.bind(person, 26));

//Question2
const age = 10;
const person1 = {
    age: 20,
    getAge() {
        return this.age
    }
}
const person2 = {
    age: 30
}
console.log(person1.getAge.call(person2));

//Question3
console.log(person1.getAge.bind(person2)());

//Question4
var status = 1;
setTimeout(function() {
    let status = 2;

    const person = {
        status: 3,
        getStatus() {
            return this.status;
        }
    }

    console.log(person.getStatus());
    console.log(person.getStatus.call(this));
}, 0);

//Question5
// call printAnimals function in such a way that it can print all animals name
const animals = [
    {name: 'Lion'}, {name: 'Tiger'}, {name: 'Elephant'}
];

function printAnimals(i) {
    this.print = function() {
        console.log(i + ' '+ this.name);
    }
    this.print();
}
//Answer
animals.forEach((ele, index) => {
    printAnimals.call(ele, index)
});

//Question
function f() {
    console.log('function value ', this);
}
const person3 = {
    g: f.bind(null)
}
person3.g();

//Question
function f2() {
    console.log(this.name);
}
f2 = f2.bind({name: 'first'}).bind({name: 'two'});  //once function bound with object can not rebpund
f2();

//Question
function checkPassword(callback) {
    callback();
}

const logIn = {
    name: 'Ajay Awachar',
    sign() {
        console.log(this.name + ' is log in');
    }
}

// checkPassword(logIn.sign);
checkPassword(logIn.sign.bind(logIn));

//Question
var old = 10;

const info = {
    name: 'Ajay',
    old: 11,
    printAgeNoemal() {
        console.log(this.old);
    },
    printAgeArrow: () => {
        console.log(this.old);
    }
}
info.printAgeNoemal();  // 11
info.printAgeArrow();   // 10
info.printAgeNoemal.call(info); // 11
info.printAgeArrow.call(info);  // 10
// we can not change value of this in arrow function

//Polyfill for Call Function
function demoFunction(p1, p2) {
    console.log(`demo polyfill function with parameter ${p1} and ${p2} object data is :: ${this.demoProp}`);
}
const demoObj = {
    demoProp: 'demoProp'
}
// demoFunction.call(demoObj, 'one', 'two');
Function.prototype.myCall = function(context = {}, ...arg) {
    if (typeof this !== 'function') {
        return Error('myCall applied to function only')
    }

    context.fun = this;
    context.fun(...arg);
}
demoFunction.call(demoObj, 'one', 'two');
demoFunction.myCall(demoObj, 'one', 'two');

//Polyfill for apply
Function.prototype.myApply = function(context = {}, arg = []) {
    if (typeof this !== 'function') {
        throw Error('myCall applied to function only')
    }

    if (!Array.isArray(arg)) {
        throw Error('argument must type of array')
    }

    context.fun = this;
    context.fun(...arg);
}
demoFunction.apply(demoObj, ['1', '2']);
demoFunction.myApply(demoObj, ['1', '2']);

//polyfill for bind
Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== 'function') {
        throw Error('myBind applied to function only')
    }

    context.fun = this;
    return function(...newArgs) {
        context.fun(...args, ...newArgs);
    }
}
const originalBind = demoFunction.bind(demoObj);
originalBind('0', '00');

const customBind = demoFunction.myBind(demoObj, '0', '00');
customBind();



