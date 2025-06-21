import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) { }

    async fillInformation(firstName: string, lastName: string, zip: string) {
        await this.page.fill('input[data-test="firstName"]', firstName);
        await this.page.fill('input[data-test="lastName"]', lastName);
        await this.page.fill('input[data-test="postalCode"]', zip);
    }

    async continue() {
        await this.page.click('input[data-test="continue"]');
    }

    async finish() {
        await this.page.click('button[data-test="finish"]');
    }

    async getThankYouMessage() {
        return this.page.textContent('.complete-header');
    }
}
