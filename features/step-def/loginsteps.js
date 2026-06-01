import { Given, When, Then } from "@cucumber/cucumber"
import { LoginPage } from "../../pages/LoginPage";
import { expect } from "chai";

let loginObject= null;

Given('user open {string}', async function(browser){
    loginObject = new LoginPage();
});

Given('user navigate to {string}', async function(url) {
    loginObject.enterUserName("");
    await this.page.goto(url);
});

When('user enter {string} in {string} textbox', async function(userData, fieldData) {
    await this.page.getByPlaceholder(fieldData).fill(userData);
})

When ('user click on sign in button' , async function() {
   await this.page.locator('button',{ hasText:"Submit Form"}).click();
   //await this.page.waitForTimeout(5000)
})

Then('user verify dashboard is visible' , async function() {
    console.log("Step5")
})

Then('user verify error msg {string}', async function(errorMsg) {
    console.log("Step6", errorMsg)
    expect(await this.page.utl()).to.contain(errorMsg);
})



