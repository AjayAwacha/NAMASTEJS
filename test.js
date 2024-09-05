// polufill for call bind apply


const user = {name: 'Ajay'};
function msg() {
    console.log('My Name is ', this.name);
}
Function.prototype.myBind = function(content = {}, ...arg) {

    content.fun = this;

    return function(...orgArg) {
        content.fun(...arg, ...orgArg)
    }
}

msg.call(user);