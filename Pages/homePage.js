exports.homePage= class homePage{
constructor(page){
    this.page=page;
    this.productlist="//div[@class='product-item']/div[2]/h2/a";
    this.addToCartbtn="//button[@id='add-to-cart-button-18']";
    this.viewCart="//a[@class='ico-cart']"
    this.cartProducts="//tr/td[@class='product']/a"
}
async gotoProductPage(){
    await this.page.goto("https://demo.nopcommerce.com/");
}

//Find Product and add to cart
async addProductToCart(productName){
    const productlist= await this.page.$$(this.productlist);
    for (const product of productlist){
        if(productName === await product.textContent()){
            await product.click();
            break;
        }
    }
    await this.page.waitForTimeout(3000);
await this.page.click(this.addToCartbtn);
}

async gotoCart(){
    await this.page.click(this.viewCart);

}

//Verify that added product is listed in the cart
async verifycartItems(cartPname){
    await this.page.waitForSelector(this.cartProducts);
    const cartItems= await this.page.$$(this.cartProducts);
    for (const item of cartItems){
        if(cartPname === await item.textContent()){
            
            console.log("Added item is in the cart");
            break;
        }
        else {
            console.log("Added item not in the cart");
        }
            
    }
}

}