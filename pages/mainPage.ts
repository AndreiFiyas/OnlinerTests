const { expect } = require('@playwright/test');

export class PwafPage {
    inlineFormName: any;
    inlineFormEmail: any;
    inlineFormCheckbox: any;
    inlineFormSubmit: any;
    gridEmail: any;
    gridPassword: any;
    gridRadio: any;
    gridSignIn: any;
    basicFormEmail: any;
    basicFormPassword: any;
    basicFormCheckbox: any;
    basicFormSubmit: any;
    labelsFormRecipients: any;
    labelsFormSubjects: any;
    labelsFormMessage: any;
    labelsFormSend: any;
    blockFormFirstName: any;
    blockFormLastName: any;
    blockFormEmail: any;
    blockFormWeb: any;
    blockFormSubmit: any;
    horizontalFormEmail: any;
    horizontalFormPassword: any;
    horizontalFormCheckbox: any;
    horizontalFormSignIn: any;
    page: any;

    constructor(page) {
        this.inlineFormName = page.getByPlaceholder('Jane Doe');
        this.inlineFormEmail = page.locator('.form-inline').getByPlaceholder('Email');
        this.inlineFormCheckbox = page.locator('.status-basic:nth-child(3) .custom-checkbox');
        this.inlineFormSubmit = page.locator('.status-primary:nth-child(4)');
        this.gridEmail = page.locator('#inputEmail1');
        this.gridPassword = page.locator('#inputPassword2');
        this.gridRadio = page.locator('nb-radio-group :text-is("Option 1")');
        this.gridSignIn = page.locator('button[ng-reflect-status="primary"]').first();
        this.basicFormEmail = page.locator('#exampleInputEmail1');
        this.basicFormPassword = page.locator('#exampleInputPassword1');
        this.basicFormCheckbox = page.locator('.form-group > .status-basic .custom-checkbox');
        this.basicFormSubmit = page.locator('.status-danger');
        this.labelsFormRecipients = page.getByPlaceholder('Recipients');
        this.labelsFormSubjects = page.getByPlaceholder('Subject');
        this.labelsFormMessage = page.getByPlaceholder('Message');
        this.labelsFormSend = page.locator('.status-success');
        this.blockFormFirstName = page.locator('#inputFirstName');
        this.blockFormLastName = page.locator('#inputLastName');
        this.blockFormEmail = page.locator('#inputEmail');
        this.blockFormWeb = page.locator('#inputWebsite');
        this.blockFormSubmit = page.locator('.appearance-filled:nth-child(3)');
        this.horizontalFormEmail = page.locator('#inputEmail3');
        this.horizontalFormPassword = page.locator('#inputPassword3');
        this.horizontalFormCheckbox = page.locator('.checkbox .custom-checkbox');
        this.horizontalFormSignIn = page.locator('.status-warning');
    };

//Inline form
    async fillInlineName(page, user) {

        await this.inlineFormName.fill(user.firstname + '' + user.lastname)
        await this.inlineFormName.innerText();
        await expect(this.inlineFormName).toHaveValue(user.firstname + '' + user.lastname);
    };

    async fillInlineEmail(user) {
        await this.inlineFormEmail.fill(user.mail);
        await this.inlineFormEmail.innerText();
        await expect(await this.inlineFormEmail).toHaveValue(user.mail);
    };
}