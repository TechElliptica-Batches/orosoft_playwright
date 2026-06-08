import { test,expect } from '@playwright/test';

test.beforeAll('before all', ()=>{

});

test.beforeEach('before every test', async({page}) =>{
  await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/orosoft_playwright/html/test1.html");
});

test.describe.configure({
    mode : "serial"
})

test.describe("test Section 1 ", ()=>{

test('upload file', async({page})=>{
    await page.locator("[id='upload']").setInputFiles("input-files/test1.txt");
})


test('verify username and password fields - @login @smoke @sanity', async({page}) => {
    await expect(page).toHaveTitle("Registration Form");
    // await expect(page).toHaveURL("http://127.0.0.1:5500/html/test1.html")
    await expect.soft(page.locator("h1")).toHaveText("User Registration Form");
    
    console.log("asdfasd");

// assertion - validation 
// hard assertion - validation - failed. No next step execution
// soft assertion - execution keep on even if validation is failed
// login screen
// username, passwrod, login button
// profile screen
// name, email, mobile, education



    await page.getByPlaceholder("Enter username").fill("vaibhav");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Enter password").fill("password");
    await page.waitForTimeout(2000);

    await page.keyboard.press("Control+A")




// Keyboard

    
})

test("verify user able to click on checkbox @checkbox", async({page}) => {
    await page.locator("//label[text()='Education']/..").getByLabel("10th").click({button:"right", clickCount : 5, delay : 1000})

    //page.locator("//label[text()='Education']/..").dragTo(page.locator(""))
    // locator chaining
    // Hover 



    page.mouse.move(500, 600, {steps: 20})

})



});


test("switching to frame and locating the elemnt ", async({page})=>{
    let myFrame = await page.frameLocator("[id='myframe']");
    await myFrame.locator("[id='searchInput']").hover();
    await myFrame.locator("[id='searchInput']").fill("Frame data");
});

test("dropdown handing", async({page})=>{
    let dropdown = await page.locator("[id='country']")
    dropdown.selectOption({value : "IND"})
    page.waitForTimeout(5000)
});

// download and upload

test("alert handling", async({page})=>{
    page.on("dialog", async(alert) =>{
        let msg = await alert.message();
        expect(msg).toBe("Please fill all mandatory fields");
        await alert.accept();
    })
    await page.locator("button", {hasText:"Submit Form"}).click();
});


test("windows handling", async({page})=>{
    
    // page.on("popup", async(window) => {
    //     await window.waitForLoadState();
    //     let title =await window.title();
    //     console.log(title);
    // });

    const popupWaitPromise = page.waitForEvent("popup");
    await page.locator("a", {hasText:"Open Google Dashboard"}).click();

    const newWindow = await popupWaitPromise;
    await newWindow.waitForLoadState();
    const title = await newWindow.title();
    //console.log(title);
    
    const allPages = await page.context().pages();
    const currentWindow = null;
    for(let page of allPages){
        console.log(await page.title());
        if(page.title() == "Registration Form"){
            currentWindow = page;
        }
    }



    // await page.screenshot({
    //     path:"googledashboard.png",
    //     fullPage : true
    // })

    // await newWindow.locator("[aria-label='Sign in']").nth(1).screenshot({
    //     path : "sign_in_button.png"
    // })

    // await newWindow.locator("[aria-label='Sign in']").nth(1).click();

});



// multiple windows
// event 
// alert = dialog
// window =  popup

// 8 testcases. every test case take 2 sec time 
// worker = 5 

// 4 sec 

