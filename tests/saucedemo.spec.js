import { test, expect } from '@playwright/test';
import users from '../javascript/data/users.json' with {type : "json"};
import { LoginPage } from '../pages/LoginPage.js';
import { Navigate } from '../pages/Navigate.js';

for(const user of users){
  test(`login for ${user.username} test`, async ({ page }) => {
    let loginPage = new LoginPage(page);
    let navigate = new Navigate(page);
    navigate.openApp();
    loginPage.login(user.username, user.password);    
  });
}


// inheritance , encapsulation, 
// 1.5 hours - playwright

//CI-CD 
// version , CI-CD


