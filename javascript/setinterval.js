


console.log("Countdown start")

let a = setInterval(printMyName, 1000);

var time= 10;
function printMyName(){
    console.log(time , " left");
    time = time -1;
    if(time == 0){
        clearInterval(a);
        console.log("Countdown over")
    }
}



