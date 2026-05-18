import PromptSync from "prompt-sync";

const prompt = PromptSync();

let wantToContinue = true;
let sum = 0;
while(wantToContinue){
    let a = parseInt(prompt("add Expense : "));
    sum = sum + a;
    console.log("Current Expense : " + sum);
    let continuePrompt = prompt("Do you wanna add more expense (y/n): ");
    wantToContinue = continuePrompt == 'y' ? true : false;
}

console.log("Your final expense for this trip is " , sum)

