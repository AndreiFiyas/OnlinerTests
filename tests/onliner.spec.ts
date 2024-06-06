import {expect, test} from "@playwright/test";
import {BankingPage} from "../pages/bankingPage";

test.beforeEach(async ({page}) => {
    // Set timeout for this hook.
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
});
test.describe('Bank Tests', () => {
    test.only('Customer login', async({page}) => {
        const bankingPage = new BankingPage(page);
        const expectedTitle = 'XYZ Bank';
        const expectedURL = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'
        await expect(page).toHaveTitle(expectedTitle)
        await bankingPage.loginButton();
        await bankingPage.userSelector('2');
        await bankingPage.pressSubmitButton();
        await expect(page).toHaveURL(expectedURL)
    });
    test('Add new customer', async({page}) => {
        const firstName =  'Test';
        const lastName =  'Testovich';
        const postCode = '192280'
        await expect(page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Bank Manager Login'}).click();
        await expect(page.getByRole('button', {name: 'Add Customer'})).toBeVisible();
        await page.getByRole('button', {name: 'Add Customer'}).click();
        await expect(page.getByPlaceholder('First Name')).toBeVisible();
        await page.getByPlaceholder('First Name').fill('Test');
        await page.getByPlaceholder('Last Name').fill('Testovich');
        await page.getByPlaceholder('Post Code').fill('192280');
        await page.locator("button[class$='btn-default']").click();
    });
    test('Add new deposite to custom user', async({page}) => {
        await expect (page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Customer Login'}).click();
        const userSelect = page.locator('#userSelect');
        expect (userSelect).toBeVisible();
        await userSelect.selectOption('2');
        await expect (page.locator('button[ng-show^=\'custId\']', {name: "submit"})).toBeVisible();
        await page.locator('button[ng-show^=\'custId\']', {name: "submit"}).dblclick();
        await page.locator('button[ng-class=\'btnClass2\']').click();
        await expect(page.getByPlaceholder('amount')).toBeVisible();
        await page.getByPlaceholder('amount').fill('2000');
        await page.locator('button[class$=\'btn-default\']').click();
        await expect(page.locator('span[ng-show=\'message\']')).toBeVisible();
    });
    test('Add new withdrawl to custom user', async({page}) => {
        await expect (page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Customer Login'}).click();
        const userSelect = page.locator('#userSelect');
        expect (userSelect).toBeVisible();
        await userSelect.selectOption('2');
        await expect (page.locator('button[ng-show^=\'custId\']', {name: "submit"})).toBeVisible();
        await page.locator('button[ng-show^=\'custId\']', {name: "submit"}).dblclick();
        await page.locator('button[ng-class=\'btnClass3\']').click();
        await expect(page.getByPlaceholder('amount')).toBeVisible();
        await page.getByPlaceholder('amount').fill('500');
        await page.locator('button[class$=\'btn-default\']').click();
        await expect(page.locator('span[ng-show=\'message\']')).toBeVisible();
    });
    test('Check user transactions', async({page}) => {
        await expect (page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Customer Login'}).click();
        const userSelect = page.locator('#userSelect');
        expect (userSelect).toBeVisible();
        await userSelect.selectOption('2');
        await expect (page.locator('button[ng-show^=\'custId\']', {name: "submit"})).toBeVisible();
        await page.locator('button[ng-show^=\'custId\']', {name: "submit"}).dblclick();
        await page.locator('button[ng-class=\'btnClass1\']').click();
        await expect (page.locator('a[ng-click*=\'sortReverse\']')).toBeVisible();
    })
})