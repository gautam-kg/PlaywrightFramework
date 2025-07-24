import {test, expect} from '@playwright/test'
import { homePage } from '../Pages/homePage'

test ('Add To Cart', async({page}) =>{

    //find product and add to cart
    const home=new homePage(page)
    await home.gotoProductPage();
    await home.addProductToCart('HTC smartphone');
    await home.gotoCart();
    await home.verifycartItems('HTC smartphone');
    await page.close();

})