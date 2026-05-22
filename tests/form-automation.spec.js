import { test,expect } from '@playwright/test';

test.beforeEach('before every test', async({page}) =>{
  await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/orosoft_playwright/html/test1.html");
});

test.describe("test Section 1 ", ()=>{

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
});


