// public and private property
// public and private method
// Private property and method accessible inside class only

class Person {
    
    #name   // private property
    #age 
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    greet() {
        console.log(`my name is ${this.#name} and i am ${this.#age} years old`)
    }

    // Private methods
    #calculateYearsToRetirement() {
        return 65 - this.#age;
    }

    yearsToRetirement() {
        console.log(`Years to retirement: ${this.#calculateYearsToRetirement()}`);
    }
}
const p1 = new Person('Ajay Awachar', 26);
p1.greet();
p1.yearsToRetirement();
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}
Animal.prototype.parentProtoMethod = function() {
    console.log('Parent class Prototype method');
}
const anm = new Animal('Elephant');
anm.eat();
anm.parentProtoMethod();
class Dog extends Animal {
    constructor(name, sound) {
        super(name);
        this.sound = sound;
    }

    bark() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
Dog.prototype.childPrototypeMethod = function() {
    console.log('childPrototypeMethod');
}
const dog = new Dog('Lobra', 'bhobho..');
dog.bark();
dog.eat();
dog.parentProtoMethod();
dog.childPrototypeMethod();
console.log(dog.__proto__ === Dog.prototype);
console.log(dog.__proto__ === Animal.prototype);
console.log(Dog.prototype.__proto__ === Animal.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);
console.log(Dog.prototype.__proto__ === Object.prototype);
// class syntax implicitly connect Dog.prototype.__proto__ === Animal.prototype not Object.prototype
dog.parentProtoMethod();

// before ES6 there is no class syntax 
// at that time we are using constructor function
// Setting up inheritance in constructor function
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Note : in constructor function Animal.prototype and Dog.prototype connected to Object.prototype
// above two line connect Dog.propotype to Animal.prototype instead Object.prototype so
// Dog constructor functon can accessible Animal.prototype methods


// static Properties and methods
class Student {
    // static property
    static university = 'MIT';
    constructor(fName) {
        // instance property
        this.fName = fName;
    }

    // static method
    static toLevlInfo() {
        // console.log('Inside Static Method This Point to ', this);
        console.log(`my university is ${this.university}`);
        console.log(`my university is ${Student.university}`);
        console.log(`Instance Property ${this.fName}`)
    }

    // instance method
    normalInfo() {
        // console.log('Inside Normal Method This Point to ', this);
        console.log(`my name is ${this.fName}`);
        console.log(`my university name is ${Student.university}`)
    }
}

// static property and methods are class level not object level can be accessible without creating object
// static property and methods are shared with all object of that class
console.log(Student.university);
Student.toLevlInfo();

// inside static method this point to class and inside normal method this point to object of class
const s1 = new Student('Suraj');
s1.normalInfo();

// inside static method we can access static property and methods only

// inside Instance method we can access both static and non static property and methods

// create singleton class in js

class singletoneExample {
    constructor() {
        if (!singletoneExample.instance) {
            singletoneExample.instance = this;
        }
        return singletoneExample.instance;
    }
}
singletoneExample.instance = null;

const instance1 = new singletoneExample();
const instance2 = new singletoneExample();
console.log(instance1 === instance2);

