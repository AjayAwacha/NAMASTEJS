// function f() {
//     var a = 10;
// }
// f();
// console.log(a);

// Variable shadowing
function test() {
    let a = 10;
    var b = 'test1';
    // let b = 'one'     // il-legal shadowing
    {
        let a = 20;
        let b = 'test2';
        // var b = 'two';
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}
test();

