function makeApiCall() {
    console.log('API call');
}

const debouncing = function(fn, limit) {
    let timer;
    return function() {
        const context = this;
        const arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, arg);
        }, limit);
    }
}

const handleInputChange = debouncing(makeApiCall, 600);

document.getElementById('serach').addEventListener('input', handleInputChange)