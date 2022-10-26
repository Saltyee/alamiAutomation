import registerPage from "./regs_page";

class regsCermati extends registerPage {
    public get daftarAkun(){
        return $('//*[@id="safe-area"]/div[2]/div[1]/div[1]/h1')
    }
    public get email (){
        return $('//*[@id="email"]')
    }
   public get noHandphone (){
    return $('//*[@id="mobilePhone"]')
    }
    public get password (){
        return $('//*[@id="password"]')
    }
    public get confirmPass (){
        return $('//*[@id="confirmPassword"]')
    }
    public get firstName (){
        return $('//*[@id="firstName"]')
    }
    public get lastName (){
        return $('//*[@id="lastName"]')
    }
    public get daftarBtn (){
        return $('//*[@id="safe-area"]/div[2]/div[2]/div/button/p')
    }
    public get verificationMethod(){
        return $('//*[@id="safe-area"]/div[2]/div[2]/div/div[1]')
    }
    public get otpviaWA(){
        return $('//*[@id="safe-area"]/div[2]/div[2]/div/div[2]/div/button[1]')
    }
    public get otpviaSMS(){
        return $('//*[@id="safe-area"]/div[2]/div[2]/div/div[2]/div/button[2]')
    }
    public get Kab(){
        return $('//*[@id="cityAndProvince"]')
    }
 
    public async daftar () {
        await browser.pause(2000)
        await this.daftarAkun.waitForDisplayed()
        await this.email.setValue('testing1234@yopmail.com')
        await this.noHandphone.setValue('087816589204')
        await this.password.setValue('Testing1234!')
        await this.confirmPass.setValue('Testing1234!')
        await this.firstName.setValue('Sutowo')
        await this.lastName.setValue('Jiworogo')
        await this.Kab.setValue('JAKARTA')
        await browser.pause(1000)
        await this.Kab.doubleClick()
        await browser.keys('Enter')
        await this.daftarBtn.click()
    }
    public async verifyPage(){
        await this.verificationMethod.waitForDisplayed()
        await this.otpviaSMS.waitForDisplayed()
        await this.otpviaWA.waitForDisplayed()

    }
}

export default new regsCermati();
