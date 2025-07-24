exports.LoginPage =
class LoginPage{
    constructor(page){

        this.page=page;
        this.url="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        this.usernameInput="//input[@placeholder='Username']";
        this.passwordInput="//input[@placeholder='Password']";
        this.loginbtn="//button[normalize-space()='Login']";
        
    }

    async gotoLoginPage(){
        await this.page.goto(this.url);
    }
    async loginUser(username,password){
        await this.page.fill(this.usernameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.loginbtn);
    }


}