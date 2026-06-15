   import { test,expect } from '@playwright/test';

   test("test3 @debugtest1" , async({page})=>{
    await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/orosoft_playwright/html/test1.html");
   //  await expect(page).toHaveTitle("Registration Form");
   //  await expect(page.locator("h1")).toHaveText("User Registration Form");
   //  await page.getByPlaceholder("Enter username").fill("vaibhav");
   // await page.pause();
   let a = 10;
   debugger;
   a  = 20;
    await page.getByPlaceholder("Enter password").fill("password");
    await page.pause();
    })
