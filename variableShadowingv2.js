// same variable name must not in the same scope

function test() {
    // case1
    // var a = 10;
    // let a = 10;
    // SE a is already defined

    // case2
    // let a = 10;
    // {
    //     var a = 20;
    // }
    // SE because var are function in scope a defined duplicate

    // let a = 10;
    // {
    //     let a = 20
    //     console.log(a);
    // }
    // console.log(a);
    // Allowed because same name but both are in different scope 

    // const a = 10;
    // {
    //     const a = 20
    //     console.log(a);
    // }
    // console.log(a);
    // Allowed same variable but different scope


    // var a = 10;
    // {
    //     let a = 20;
    //     console.log(a);
    // }
    // console.log(a);
    // Allowed same variable but different scope


    // {
    //     let a = 10;
    //     let a = 20;
    // }
    // not allowed same variable in same scope

}
test();
