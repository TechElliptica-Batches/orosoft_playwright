
export class LoginPage{
    constructor(page){ 
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }


    async enterUserName(username){
        await this.username.click();
        await this.username.fill(username);
    }

     async enterPassword(password){
        await this.password.click();
        await this.password.fill(password);
    }

     async SignIn(){
        await this.loginBtn.click();
    }

    async login(username, password){
        this.enterUserName(username);
        this.enterPassword(password);
        this.SignIn();
    }

}