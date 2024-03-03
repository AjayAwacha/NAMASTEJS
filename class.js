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
class Dog extends Animal {
    constructor(name, sound) {
        super(name);
        this.sound = sound;
    }

    bark() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Dog('Lobra', 'bhobho..');
dog.bark();
dog.eat();

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

