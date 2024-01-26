console.log('Start');
setTimeout(function() {
    console.log('Callback');
}, 5000);
console.log('End');

const start = new Date().getTime();
let end = start;
while (end < (start + 10000)) {
    end = new Date().getTime();
}
console.log('While complete');
