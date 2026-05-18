


// 


// let num = 647372368632;
// let reverNumber = reverseNumber(num);
// console.log(reverNumber);
console.log("Vaibhav");
export function reverseNumber(num){
    let rev = 0;
    while(num != 0){
        let reminder = num % 10;
        rev = rev * 10 + reminder;
        num = Math.floor(num / 10);
    }
    return rev;
}


