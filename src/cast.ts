


let value: unknown = 10;
// as 
//let str = value as string;
let str = <string>value;
console.log(typeof str);

if( typeof value === 'number'){
    console.log(value)
}else if(typeof value === 'string'){
    console.log(value.length)
}



