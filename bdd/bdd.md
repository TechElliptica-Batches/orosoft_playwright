
behavioural driven development


manual test case


shift left approach 
full automation 

full coverage

automation team . (less product knowledge ) - coverage - prod bug increase
manual team  (slow work) - time line 


BDD 

pure english

test('verify username and password fields - @login @smoke @sanity', async({page}) => {
    await expect(page).toHaveTitle("Registration Form");
   // await expect(page).toHaveURL("http://127.0.0.1:5500/html/test1.html")
    await expect(page.locator("h1")).toHaveText("User Registration Form");
    await page.getByPlaceholder("Enter username").fill("vaibhav");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Enter password").fill("password");
    await page.waitForTimeout(2000);

})


user open "Chrome"
user navigate to "http://127.0.0.1:5500/html/test1.html"
user verify header is "User Registration From"
user enter "vaibhav" in "Enter username" textbox
user wait for "2" sec
user enter "password" in "Enter password" textbox
user wait for "2" sec


Gherkin language
Rule 1 - feature file
Rule 2 - Feature 

Rule 3 - Feature - mutluple scenario
Rule 4 - Step

Given - prereq
When - action step (click, enter, doubleclick)
Then  - verify, validate
And



all step are same. only test data is different

scenario outline
scenario 
background
param

      


cucumber-js 

npm install @cucumber/cucumber
npm install chai
npm install dotenv


