// const {test , expect} = require('playwright/test')
import {test ,expect} from '@playwright/test'

test('Locators', async ({page}) =>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//click login button
//await page.locator("//input[@placeholder='Username']").click()
await page.fill("//input[@placeholder='Username']",'Admin')
await page.fill("//input[@placeholder='Password']",'admin123')
await page.click("//button[normalize-space()='Login']")

//open admin menu
await page.click("//li[1]//a[1]//span[1]")

const admins=await page.$$("//div[@class='oxd-table-card']/div[1]/div[2]//div")

for (const admin of admins){
    const adminFname= await admin.textContent();
    console.log(adminFname);
}
})
