import {Page} from "@playwright/test";

export class BankingPage {
    private readonly customerLogin =  this.page.getByRole('button', {name: 'Customer Login'});
    private readonly userSelect = this.page.locator('#userSelect');
    private readonly submitButton = this.page.locator('button[ng-show^=\'custId\']', {name: "submit"});
    private readonly bankLogin = this.page.getByRole('button', {name: 'Bank Manager Login'});
    private readonly addNewCustomer = this.page.getByRole('button', {name: 'Add Customer'});
    private readonly customerFirstName = this.page.getByPlaceholder('First Name');
    private readonly customerLastName = this.page.getByPlaceholder('Last Name');
    private readonly customerPostCode = this.page.getByPlaceholder('Post Code');
    private readonly customerAddButton = this.page.locator("button[class$='btn-default']");
    private readonly depositButton = this.page.locator('button[ng-class=\'btnClass2\']');
    private readonly amountField = this.page.getByPlaceholder('amount');
    private readonly applyButton = this.page.locator('button[class$=\'btn-default\']');
    private readonly successMessage = this.page.locator('span[ng-show=\'message\']');
    private readonly withdrawlButton = this.page.locator('button[ng-class=\'btnClass3\']');
    private readonly transactionlButton = this.page.locator('button[ng-class=\'btnClass1\']');
    private readonly transactionList = this.page.locator('a[ng-click*=\'sortReverse\']');


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
    public async checkPageURL() {
        await this.bankURL()
    };


    //Add new customer methods
    public async addCustomerFirstName(firstName: string) {
        await this.customerFirstName.fill(firstName);
    };
    public async addCustomerLastName(lastName: string) {
        await this.customerLastName.fill(lastName);
    };
    public async addCustomerPostCode(postCode: string) {
        await this.customerPostCode.fill(postCode);
    };
    public async pressCustomerButton() {
        await this.customerAddButton.click();
    };


}