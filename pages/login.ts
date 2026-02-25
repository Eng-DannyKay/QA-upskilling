import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly username_Textbox: Locator;
    readonly password_Textbox: Locator; 
    readonly login_Button: Locator;
    constructor(page:Page) {
        this.page = page;
        this.username_Textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_Textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_Button = page.getByRole('button', { name: 'Login' });
    }

     async gotoLoginPage() {
     await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username:string, password:string) {
        await this.username_Textbox.click();
        await this.username_Textbox.fill(username);
        await this.password_Textbox.click();
        await this.password_Textbox.fill(password);
        await this.login_Button.click();
  }
   
}