// console.log(Math.floor(10.4));
// console.log(Math.ceil(10.4));
// console.log(Math.floor(10.4));

// 1 to 100 
// random value

// 100 - 500 
// 500 - 100 = 400

function getRandomString(len){
    let charString = "abcdefghijklmnopqrstuvwxyz012345678234aadgdsasassvzxcgr90ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let start = 1;
    let end = charString.length; // 50

    // 10 char 
    let randomString = "";
    for(let i = 1 ; i <= len; i++){
    let rValue = (Math.floor(Math.random()* (end - start)) + start);
    randomString = randomString + charString.charAt(rValue);
    }
    return randomString;
}

console.log(getRandomString(100));
console.log(getRandomString(5));
// random valyue between 0 and 1
// 0 to 1
