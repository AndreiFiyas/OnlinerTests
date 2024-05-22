import {expect, test} from "@playwright/test";
import assert from "node:assert";

test.describe('Bank Tests', () => {
    test('Customer login', async({page}) => {
        await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        expect(page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Customer Login'}).click();
        const userSelect = page.locator('#userSelect');
        expect(userSelect).toBeVisible();
        await userSelect.selectOption('2');
        await expect(page.locator('button[ng-show^=\'custId\']', {name: "submit"})).toBeVisible();
        await page.locator('button[ng-show^=\'custId\']', {name: "submit"}).dblclick();
        await expect(page).toHaveURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
    });
    test('Add new customer', async({page}) => {
        await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        expect(page).toHaveTitle('XYZ Bank');
        await page.getByRole('button', {name: 'Bank Manager Login'}).click();
        await expect(page.getByRole('button', {name: 'Add Customer'})).toBeVisible();
        await page.getByRole('button', {name: 'Add Customer'}).click();
        await expect(page.getByPlaceholder('First Name')).toBeVisible();
        await page.getByPlaceholder('First Name').fill('Test');
        await page.getByPlaceholder('Last Name').fill('Testovich');
        await page.getByPlaceholder('Post Code').fill('192280');
        await page.locator("button[class$='btn-default']").click();
    })
})