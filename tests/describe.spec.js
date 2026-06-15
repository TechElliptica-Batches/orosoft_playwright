import { test,expect } from '@playwright/test';

test.describe('Place order tests',() => {

    test("test1" , async({page})=>{
        await page.goto("https://www.google.com")
    })
    test("test2" , async({page})=>{
        await page.goto("https://www.google.com")
    })
    test("test3 @debugtest" , async({page})=>{
        await page.goto("https://www.google.com");
       // await page.pause();
        debugger
    })
});

test.describe.skip('Update order tests',() => {

    test("update test1" , async({page})=>{
        await page.goto("https://www.google.com")
    })
    test("udpate test2" , async({page})=>{
        await page.goto("https://www.google.com")
    })
    test("udpate test3" , async({page})=>{
        await page.goto("https://www.google.com")
    })

});