function handleButtonClick() {
    console.log('make API call');
    console.log('Value of this receive ', this);
    console.log('Arguments are ', arguments);
}

const throttling = function(functionToExecute, limit) {
    let flag = true;
    return function() {
        const context = this;
        const arg = arguments;
        if (flag) {
            functionToExecute.apply(context, arg);
            flag = false;
            setTimeout(() => {
                console.log('Timer Reset');
                flag = true;
            }, limit);
        }
    }
}

const betterButtonHandler = throttling(handleButtonClick, 5000);

document.getElementById('throttlingBtn').addEventListener('click', betterButtonHandler);