import {expect, test} from "@playwright/test";
import {BankingPage} from "../pages/bankingPage";
import { UserBuilder } from '../services/user_builder';

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
        const user = new UserBuilder().addFirstName().addLastName().depositeAmount().postCode().getUser();
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.bankButton();
        await bankingPage.pressCustomerButton();
        await bankingPage.addNewBankCustomer();
        await bankingPage.addCustomerFirstName(user);
        await bankingPage.addCustomerLastName(user);
        await bankingPage.addCustomerPostCode(user);
        await bankingPage.checkCustomerDataFields(); //expect
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Customer added successfully with customer id');
            await dialog.accept();
        });
        await bankingPage.pressAddCustomer();
    });

    test('Add new deposite to custom user', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const user = new UserBuilder().addFirstName().addLastName().depositeAmount().postCode().getUser();
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await bankingPage.pressDepositeButton();
        await bankingPage.checkAmountField() //expect
        await bankingPage.fillAmountField(user);
        await bankingPage.pressApplyButton()
        await bankingPage.checkSuccessMessage(); //expect
    });

    test('Add new withdrawl to custom user', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const user = new UserBuilder().addFirstName().addLastName().depositeAmount().postCode().getUser();
        await expect(page).toHaveTitle(expectedTitle);
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.checkSubmitButton(); //expect
        await bankingPage.pressSubmitButton();
        await bankingPage.pressWithdrawlButton();
        await bankingPage.checkAmountField() //expect
        await bankingPage.fillAmountField(user);
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