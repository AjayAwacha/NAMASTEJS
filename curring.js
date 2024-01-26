// question1
// create function curringSub(10)(20)
// function sum(x, y) {
//     return x + y;
// }

function curringSub(x) {
    return function(y) {
        return x + y;
    }
}
console.log(curringSub(10)(20));

//Question2
// create function curring(10)(20)(30)

function curring(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };        
    }
}
console.log(curring(10)(20)(30));

// Question3
// evaluate('add')(10)(20)
// evaluate('sub')(10)(20)
// evaluate('mul')(10)(20)
// evaluate('div')(10)(20)

function evaluate(operator) {
    return function(x) {
        return function(y) {
            if (operator === 'add') return x + y;
            if (operator === 'sub') return x - y;
            if (operator === 'mul') return x * y;
            if (operator === 'div') return x / y;
        }
    }
}
console.log(evaluate('add')(10)(20));

// Question4
// infinite curring cur(10)(20)..(n)();
function cur(a) {
    return function(b) {
        if (!b) return a;
        return cur(a + b); 
    }
}
console.log(cur(10)(20)(40)());

// Question5
// real world screnrio of using curring

function getElement(id) {
    let element = document.getElementById(`${id}`);
    return function(context) {
        element.innerText = context;
    }
}

const btnFun = getElement('payNow');
btnFun('My Text');

// Question6
// create function which convert normal function into curring function

function add(a, b, c, d) {
    return a + b + c + d;
}

function convertToCurring(fun) {
    return function curried(...args) {
        if (args.length >= fun.length) {
            return fun(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            }
        }
    }
};

const convertedFun = convertToCurring(add);
console.log(convertedFun(20)(20)(10)(10));
