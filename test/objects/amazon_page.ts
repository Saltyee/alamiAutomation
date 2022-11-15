import amazonPage from "./amazon_url";

class amazonTest extends amazonPage {
    public get searchBox(){
        return $('//*[@id="twotabsearchtextbox"]')
    }
    public get items(){
        return $('//*[text()="Microsoft Authorized Refurbished- HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, USB WiFi, Windows 10 (Renewed)"]')
    }
    public get qtyItem(){
        return $('//*[@id="a-autoid-0-announce"]')
    }
    public get tenQrt (){
        return $('.a-dropdown-link=10')
    }
    public get addCartBtn(){
        return $('//*[@id="add-to-cart-button"]')
    }
    public get cartBtn(){
        return $('//*[@id="nav-cart"]')
    }
    public get totalPrice(){
        return $('//*[@id="sc-subtotal-amount-activecart"]/span')
    }
    public get checkItem(){
        return $('//*[@id="sc-active-C15d1e488-44cc-4341-b446-0f6bc8a3a820"]/div[4]/div/div[2]/ul/li[1]/span/a/span[1]/span/span[1]/text()')
    }
    public get delete (){
        return $('.a-color-link')
    }
    public get verifyDelete(){
        return $('.a-spacing-mini=Your Amazon Cart is empty.')
    }
    public async searchItems () {
        await this.searchBox.setValue('Computer')
        await browser.keys('Enter')
        await this.searchBox.setValue('HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram')
        await browser.keys('Enter')
        await this.items.click()
    } 
    public async addCart() {
        await this.qtyItem.click()
        await this.tenQrt.click()
        await this.addCartBtn.click()
        await this.cartBtn.click()
    }
    public async deleteItem(){
        await this.totalPrice.getText()
        await this.delete.click()
        const verifyDeleteItems = await expect(this.verifyDelete).toHaveTextContaining('Your Amazon Cart is empty.')
        console.log(verifyDeleteItems)
    }
}


export default new amazonTest();
