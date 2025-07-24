import {test, expect} from "@playwright/test"

test('assertions', async ({page}) =>{

await page.goto('https://demo.nopcommerce.com/register')

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

await expect(page).toHaveTitle('nopCommerce demo store. Register')

const logoelement = await page.locator("//img[@alt='nopCommerce demo store']")
await expect('logoelement').toBeVisible()
})