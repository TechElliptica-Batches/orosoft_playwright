
// how to return a function from a function


// 2
function getMyMultiplier(multiplierValue){
    return function mutliplyBy2(val){
        return val * multiplierValue;
    }
}

let mul_18 = getMyMultiplier(18);
let double = getMyMultiplier(2);
let mul_13 = getMyMultiplier(13);

console.log(mul_18(10)); // 180
console.log(double(23)); // 46
console.log(mul_13(13));

// console.log(mutliplyBy2(4));
// console.log(mutliplyBy3(4));
