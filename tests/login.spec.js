import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page
        .locator('//div[@id="login_button_container"]')
        .locator('[data-test="username"]')
        .filter({has : 'vaibhav'})
        .first()
        .click();


const frame1 =   await page.frameLocator("")
frame1.locator("asdf").click();
// Filter

// table 
// tr 
// td 

// column vaibhav


  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_Sauce');
  await page.locator('[data-test="login-button"]').click();
});