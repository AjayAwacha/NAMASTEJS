
//
console.log(this);

function NormalFun() {
    console.log(this); //this point owner of function and owner of function is window object
}
NormalFun();

const arrow = () => {
    console.log(this);  //this point to lexical parent
}
arrow();

// In Object
const obj = {
    myName: 'Ajay',
    print() {
        console.log(this.myName);
    },
    arrowTest: () => {
        console.log(this.myName);
    }
}
obj.print(); // owner of print is obj
obj.arrowTest(); // lexical owner of this function is window object

const nestedObj = {
    myName: 'Ajay',
    nested: {
        nestedName: 'Sopan',
        print() {
            console.log(this.myName);
        },
        arrowTest: () => {
            console.log(this.myName);
        }
    }
}
nestedObj.nested.print();
nestedObj.nested.arrowTest();

const objLexical = {
    myName: 'Ajay',
    print() {
        arrowTest = () => {
            console.log(this.myName);
        }
        arrowTest();
    }
}
console.log('objLexical', objLexical.print());

const user = {
    myName: 'Ajay Awachar',
    logMessage: function() {
       console.log('this value', this.myName); 
    }
}

// setTimeout(user.logMessage, 1000);
// To Fix this
setTimeout(function() {
    user.logMessage()
}, 1000);


//Question2
// var length = 6;
// function print() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(fun) {
//         fun()
//     }
// }
// console.log(object.method(print));

//Question3
var length = 6;
function print() {
    console.log(this.length);
}

const object = {
    length: 5,
    method() {
        arguments[0]();
    }
}
console.log(object.method(print, 2, 3));

//Question4
// Implement
// const result = calc.add(6).sub(2).mul(6).div(2);

const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    sub(b) {
        this.total -= b;
        return this;
    },
    mul(c) {
        this.total *= c;
        return this;
    },
    div(d) {
        this.total /= d;
        return this;
    }
}
const result = calc.add(6).sub(2).mul(6).div(2);
console.log('result ', result.total);
