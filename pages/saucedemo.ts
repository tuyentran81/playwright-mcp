import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}

export class InventoryPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.click('button[data-test="checkout"]');
  }
}

export class CheckoutPage {
  constructor(private page: Page) {}

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
