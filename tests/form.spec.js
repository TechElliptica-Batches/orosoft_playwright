// test .spec.js
// fixture in playwright
// what is fixture - predefined object
/** 
UI fixture
1 - browser - browser service
2 - context - incognito isolated cokkies free session 
3 - page - tab inside your context

4 - request
5 - response
*/
import { test, expect } from '@playwright/test';


test("fixture demo @jira-1678 @story-1920", async({browser, context, page})=>{

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto("https://www.amazon.com");
    let page2 = await context1.newPage();
    await page2.goto("https://www.facebook.com");

    let context2 = await browser.newContext();
    let page3 = await context2.newPage();
    await page3.goto("https://www.myntra.com");
    let page4 = await context2.newPage();
    await page4.goto("https://www.techelliptica.com");

});