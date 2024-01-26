const radius = [2, 4, 6, 8];

const areaOfCircle = function(radius) {
    return Math.PI * radius * radius;
}

const circuramfrance = function(radius) {
    return Math.PI * 2 * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

function calculate(arr, logic) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

// const data1 = calculate(radius, areaOfCircle);
// const data2 = calculate(radius, circuramfrance);
// const data3 = calculate(radius, diameter);

// our custom Map implementation
// we can also called it as polyfill
Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

const data1 = radius.calculate(areaOfCircle);
const data2 = radius.calculate(circuramfrance);
const data3 = radius.calculate(diameter);

console.log(data1);
console.log(data2);
console.log(data3);