import {expect, Page} from "@playwright/test";

export class BankingPage {
    public readonly customerLogin =  this.page.getByRole('button', {name: 'Customer Login'});
    public readonly userSelect = this.page.locator('#userSelect');
    // public readonly submitButton = this.page.locator('button[ng-show^=\'custId\']', {name: "submit"});
    public readonly submitButton = this.page.getByRole('button', {name: 'Login'})
    public readonly addCustomerButton = this.page.getByRole('button', {name: 'Add Customer'})
    public readonly bankLogin = this.page.getByRole('button', {name: 'Bank Manager Login'});
    public readonly addNewCustomer = this.page.getByRole('button', {name: 'Add Customer'});
    public readonly customerFirstName = this.page.getByPlaceholder('First Name');
    public readonly customerLastName = this.page.getByPlaceholder('Last Name');
    public readonly customerPostCode = this.page.getByPlaceholder('Post Code');
    // public readonly customerAddButton = this.page.locator("button[class$='btn-default']");
    public readonly customerAddButton = this.page.getByRole('button', {name: 'Add Customer'})
    public readonly depositButton = this.page.locator('button[ng-class=\'btnClass2\']');
    public readonly amountField = this.page.getByPlaceholder('amount');
    public readonly applyButton = this.page.locator('button[class$=\'btn-default\']');
    public readonly successMessage = this.page.locator('span[ng-show=\'message\']');
    public readonly withdrawlButton = this.page.locator('button[ng-class=\'btnClass3\']');
    public readonly transactionlButton = this.page.locator('button[ng-class=\'btnClass1\']');
    public readonly transactionList = this.page.locator('a[ng-click*=\'sortReverse\']');


    constructor(
        private page: Page
    ) {}


    //Login methods
    public async loginButton() {
        await this.customerLogin.click()
    };
    public async userSelector(value: string) {
        await this.userSelect.selectOption(value)
    };
    public async pressSubmitButton() {
        await this.submitButton.dblclick()
    };
    public async checkSubmitButton() {
        await expect(this.submitButton).toBeVisible();
    };


    //Add new customer methods
    public async bankButton() {
        await this.bankLogin.click();
    }
    public async addNewBankCustomer() {
        await this.addNewCustomer.click();
    };
    public async addCustomerFirstName(user: { firstname: string, lastname: string, depositeamount: string, postcode: string }) {
        await this.customerFirstName.fill(user.firstname);
    };
    public async addCustomerLastName(user: { firstname: string, lastname: string, depositeamount: string, postcode: string }) {
        await this.customerLastName.fill(user.lastname);
    };
    public async addCustomerPostCode(user: { firstname: string, lastname: string, depositeamount: string, postcode: string }) {
        await this.customerPostCode.fill(user.postcode);
    };
    public async checkCustomerDataFields() {
        await expect(this.customerFirstName).toBeVisible();
        await expect(this.customerLastName).toBeVisible();
        await expect(this.customerPostCode).toBeVisible();
    };
    public async pressCustomerButton() {
        await this.customerAddButton.click();
    };
    public async pressAddCustomer() {
        await this.addCustomerButton.nth(1).click();
    };

    //Add deposite methods
    public async pressDepositeButton() {
        await this.depositButton.click();
    };
    public async fillAmountField(user: { firstname: string, lastname: string, depositeamount: string, postcode: string }) {
        await this.amountField.fill(user.depositeamount);
    };
    public async checkAmountField() {
        await expect(this.amountField).toBeVisible();
    };
    public async pressApplyButton() {
        await this.applyButton.click();
    };
    public async checkSuccessMessage() {
        await expect(this.successMessage).toBeVisible();
    };

    //Add withdrawl & transaction methods
    public async pressWithdrawlButton() {
        await this.withdrawlButton.click();
    };
    public async pressTransitionButton() {
        await this.transactionlButton.click();
    };
    public async checkTransitionList() {
        await expect(this.transactionList).toBeVisible();
    }





}