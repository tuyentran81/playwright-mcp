import { Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) { }

    async addBackpackToCart() {
        await this.page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
    }
}
