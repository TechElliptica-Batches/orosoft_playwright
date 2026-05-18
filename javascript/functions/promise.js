

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

click("sign in").then(() => {
    return fill("username","username1");    
}).then(() => {
    return fill("password","password1");
}).then(() => {
    return click("login button");
}).catch((msg) => {
    console.log("Catch : " + msg)
}).finally(() =>{
    console.log("I am done. test status is updated. nwo i am closing my browser");
});

// click("Signin Link");
// fill("username","username1");
// fill("password","password1");
// click("login button");

// finally - will always execute


