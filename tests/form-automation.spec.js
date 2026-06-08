import { test,expect } from '@playwright/test';

test.beforeEach('before every test', async({page}) =>{
  await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/orosoft_playwright/html/test1.html");
});

test.describe.configure({
    mode : "serial"
})

test.describe("test Section 1 ", ()=>{


    test('upload file', async({page})=>{
    // await page.locator("[id='upload']").setInputFiles("input-files/test1.txt");
    
    const downloadPromise = page.waitForEvent("download");
    await page.locator("[id='download']").click();
    const download = await downloadPromise;
    const fileName = await download.suggestedFilename();
    await download.saveAs(
        `download/${fileName}`
    )
})


test('verify username and password fields - @login @smoke @sanity', async({page}) => {
    await expect(page).toHaveTitle("Registration Form");
   // await expect(page).toHaveURL("http://127.0.0.1:5500/html/test1.html")
    await expect(page.locator("h1")).toHaveText("User Registration Form");
    await page.getByPlaceholder("Enter username").fill("vaibhav");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Enter password").fill("password");
    await page.waitForTimeout(2000);

})

test("verify user able to click on checkbox @checkbox", async({page}) => {
    await page.locator("//label[text()='Education']/..").getByLabel("10th").click();
    // locator chaining
})

});


test("switching to frame and locating the elemnt", async({page})=>{
    let myFrame = await page.frameLocator("[id='myframe']");
    await myFrame.locator("[id='searchInput']").fill("Frame data");
});

test("dropdown handing", async({page})=>{
    let dropdown = await page.locator("[id='country']")
    dropdown.selectOption({value : "IND"})
    page.waitForTimeout(5000)
});

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

