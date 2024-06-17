import {expect, test} from "@playwright/test";
import {BankingPage} from "../pages/bankingPage";

test.beforeEach(async ({page}) => {
    // Set timeout for this hook.
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
});
test.describe('Bank Tests', () => {
    test('Customer login', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const expectedURL = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await expect(page).toHaveURL(expectedURL)
    });

    test('Add new customer', async({page}) => {
        const firstName =  'Test';
        const lastName =  'Testovich';
        const postCode = '192280'
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const expectedURL = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.bankButton();
        await bankingPage.pressCustomerButton();
        await bankingPage.addNewBankCustomer();
        await bankingPage.addCustomerFirstName(firstName);
        await bankingPage.addCustomerLastName(lastName);
        await bankingPage.addCustomerPostCode(postCode);
        await bankingPage.checkCustomerDataFields(); //expect
        await bankingPage.pressSubmitButton();
        await expect(page).toHaveURL(expectedURL)
    });

    test('Add new deposite to custom user', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const depositeAmount = '2000';
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await bankingPage.pressDepositeButton();
        await bankingPage.checkAmountField() //expect
        await bankingPage.fillAmountField(depositeAmount);
        await bankingPage.pressApplyButton()
        await bankingPage.checkSuccessMessage(); //expect
    });

    test('Add new withdrawl to custom user', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const depositeAmount = '500';
        await expect(page).toHaveTitle(expectedTitle);
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await bankingPage.pressWithdrawlButton();
        await bankingPage.checkAmountField() //expect
        await bankingPage.fillAmountField(depositeAmount);
        await bankingPage.pressApplyButton();
        await bankingPage.checkSuccessMessage(); //expect
    });

    test('Check user transactions', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const expectedURL = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await bankingPage.pressTransitionButton();
        await bankingPage.checkTransitionList();   //expect
    })
})