import {expect, test} from "@playwright/test";
import assert from "node:assert";
import {beforeEach} from "node:test";

test.beforeEach(async ({page}) => {
    // Set timeout for this hook.
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
});
test.describe('Bank Tests', () => {
    test('Customer login', async({page}) => {
        await expect(page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Customer Login'}).click();
        const userSelect = page.locator('#userSelect');
        expect(userSelect).toBeVisible();
        await userSelect.selectOption('2');
        await expect(page.locator('button[ng-show^=\'custId\']', {name: "submit"})).toBeVisible();
        await page.locator('button[ng-show^=\'custId\']', {name: "submit"}).dblclick();
        await expect(page).toHaveURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
    });
    test('Add new customer', async({page}) => {
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