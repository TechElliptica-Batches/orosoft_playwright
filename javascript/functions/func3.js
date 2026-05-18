
// when we pass function as param

let withStar = (value) => {
    console.log("***********************")
    console.log(value);
    console.log("***********************")
}
let withHash = (value) => {
    console.log("#######################")
    console.log(value);
    console.log("#######################")
}


function printMyName(nameValue, printStyleFunc){
    printStyleFunc(nameValue);
}

var myName = "Vaibhav";
console.log(withHash("vaibhav"));
