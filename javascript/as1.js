import PromptSync from "prompt-sync";

const prompt = PromptSync();

let num = prompt("Enter your Number :  ")   // 8254
let rev = 0;

let lastDigit = num % 10; // 8
rev = rev * 10 + lastDigit; // 8. , rev = 8
num = Math.floor(num / 10); // num = 452

lastDigit = num % 10;  // 2
rev = rev * 10 + lastDigit;  // 80 + 2 = 82
num = Math.floor(num / 10); // 45

lastDigit = num % 10;  // 5
rev = rev * 10 + lastDigit;  // 820 + 5 = 825
num = Math.floor(num / 10); // 4

lastDigit = num % 10;  // 4
rev = rev * 10 + lastDigit;  // 8250 + 4 = 8254

console.log(rev);

// a = b 
// b = c 
// c = a
// reverse 

// prompt-sync