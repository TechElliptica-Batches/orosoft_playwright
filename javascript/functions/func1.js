import { reverseNumber } from "../reverse.js";

// console.log(reverseNumber(23));
// console.log(reverseNumber(23));
// console.log(reverseNumber(23));
// what is function ?
// function = service

// take some input from you
// function logic (model)
// give some output to you


// calculator
// + 
// 12 + 50 = 62

// service = 
// function name = add
// input = a, b. (parameters)
// return - output 

// 
// ... - REST operator


// console.log(add(10,20));
// console.log(add(10,20,67,10,67,89,10));
// console.log(add(10,20,34,90,1));
// console.log(add(10));
// console.log(add());

// default param
// ... 1 param , last param of the param list
// last and only param in param list
function add (a, b, ...numbers){
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
    // array
}

function multiply(a, b){
    let c = a * b;
    return c;
}

// square 
function sqaure(a){
    let c = multiply(a , a);
    return c;
}


// 1 fucntion = 1 responsibility 
// multiply 
// arguments 
// repeating code 



