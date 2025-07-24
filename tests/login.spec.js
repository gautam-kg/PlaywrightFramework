import {test,expect} from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage";


test ('Home Page' , async({page}) => {

//loginuser    
const login=new LoginPage(page);
await login.gotoLoginPage();
await login.loginUser('Admin','admin123');

await page.waitForTimeout(3000);
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


    await page.close();
})