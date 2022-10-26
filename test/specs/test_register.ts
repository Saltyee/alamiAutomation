import Register from  '../objects/regscermati';

describe.only('SCENARIO REGISTER CERMATI', () => {
    it('Register account on register Page', async () => {
        await Register.openWebsite()
        await Register.daftar()
    });
    it('Wait for displayed has been entered on Verification Method page', async () => {
        await Register.verifyPage()
    });
});