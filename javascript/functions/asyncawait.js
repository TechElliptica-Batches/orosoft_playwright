

// Promise 
// fullfilled (success) - then
// rejected (failure).  - catch
// pending - in progress

// resolve and reject - function, 

function click(locator){
    let pm = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("clicking on " + locator);
            resolve();
        },5000)
    })
    return pm;
}

function fill(locator, fillText){
    let pm = new Promise((resolve, reject) => {
        setTimeout(() => {     
            if(locator === "password"){
                reject("password locator not found. so cant go further");
            }
            console.log("filled "+ locator + " with " + fillText)
            resolve();
        },2000)
    })
    return pm;
}

// async and await
async function test1(){
    try{
        await click("sign in");
        await fill("username","username1"); 
        await fill("password","password1");
        await click("login button");
    }catch(vaibhav){
        console.log("Catch : " + vaibhav)
    }
}

test1();
// await - i am pausing your thread until this promise is not resolved
// Rules 1 - await - always return promise
// Rules 2 - await - outside function you cannot write await
// Rules 3 - i am using await function. the function must be async



// Promise 
// click("sign in").then(() => {
//     return fill("username","username1");    
// }).then(() => {
//     return fill("password1","password1");
// }).then(() => {
//     return click("login button");
// }).catch((msg) => {
//     console.log("Catch : " + msg)
// }).finally(() =>{
//     console.log("I am done. test status is updated. nwo i am closing my browser");
// })



// click("Signin Link");
// fill("username","username1");
// fill("password","password1");
// click("login button");

// finally - will always execute


