// click activity takes 5 sec to perform click
function click(locator){
    setTimeout( () => {
        console.log("Click on "+ locator)
    }, 5000); 
}
// fill activity takes 2 sec to perform type or fill
function fill(locator, fillText){
    setTimeout( () => {
        console.log("filled "+ locator + " with " + fillText)
    }, 2000); 
}
// Step 1 - click on signin link
// step 2 - enter username
// step 3 - enter password
// step 4 - click on login button
click("Signin Link");
fill("username","username1");
fill("password","password1");
click("login button");
// Javascript is a single thread langauge 
// Javascript method will trigger. javascript never to finish these method
// javascript is web design langauge

