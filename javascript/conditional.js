import PromptSync from "prompt-sync";

// if this condition satisfy - then i ll this part
// else i ll do this part

const prompt = PromptSync();

let age = prompt("What is your age ? ");
//let agegroup = age <= 18 ? "Child" : "Adult" ;
let agegroup = "";

if(age <= 18){
    agegroup = "Child";
}else if(age > 18 && age <= 30){
    agegroup = "Adult";
}else if(age > 30 && age <= 45){
    agegroup = "Mature"
}else{
    agegroup = "Old";
}
console.log("Age Group :" , agegroup);
// agegroup value is dependent on age variable
// ternary operator  ? : 

// < 18 = Child
// 18 - 30 = Afult
// 30 - 45 = Mature
// > 45 = Old



