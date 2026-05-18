
// Variables = vary + able
// constant 

// 4 types

// 1 - implicit global - pure global variable , no hoisting
// 2 - var - global + function scope variable ,  hoisting

// 3 - let - blocked scope variable.  - variable,  hoisting
// 4 - const - blocked scope variable - constant,  hoisting

// const a = 10;
// console.log(a);
// a = 20;
// console.log(a)

// javascript is blocking language 
// var -> let is possible
// let -> var is not possible

// redeclaration

{
    let a = 10;
    {
       let a = 20; 
    }
    

    {
        console.log(a);
    }
}
