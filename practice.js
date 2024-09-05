
// polyfill for call/bind and apply
// debounding
// throttling
// polyfill for map/ filter/reduce
// create function to compare two object

// polyfill for includes method
// polyfill for find method
// polyfill for some/ every

const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myEvery = function(callback) {
    for(let i = 0; i < this.length; i++) {
        const result = callback(this[i], i, this);
        if (!result) return false;
    }
    return true
}
const data = arr.myEvery((ele, index, arr) => {
    return ele > 1
});
console.log(data);

