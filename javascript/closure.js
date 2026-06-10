
// high order functions - closure


// function multipliar(a){
//     let func3 = function func2(b){
//         return a * b;
//     }
//     return func3;
// }

// let times_10 = multipliar(10);
// console.log(times_10(5));



function randomValue(start, end, isCharRequired = false , templateString, lengthOfRandomString ){
    let r = function getRandom(){
        if(isCharRequired){
            let randomString = "";
            let templateStringLength = templateString.length;
            
            for(let i = 0; i < lengthOfRandomString ; i++){
                let index = Math.ceil(Math.random() * templateStringLength);
                let ch = templateString.charAt(index);
                randomString = randomString + String(ch);
            }
            return randomString;
        }else{
            let range = end - start;
            let randomNumber = start + Math.ceil(Math.random() * range);
            return randomNumber
            }
    }
    return r;
}


let fun_100_200 = randomValue(100, 200);
let generateUUID = randomValue(100, 200, true, "abcdefghijkakjdfhkadfha1786378683203268263", 30);
let nameGenerator = randomValue(0, 0, true, "abcdefghjkllmnopqrstuvwxyz".toUpperCase(), 10);




// console.log(lowerCaseRandomString());
// console.log(upperCaseRandomString());


// let lowerAHRandomString = randomValue(100, 200, true, "abcdefgh", 10);


console.log(generateUUID());
console.log(nameGenerator());





