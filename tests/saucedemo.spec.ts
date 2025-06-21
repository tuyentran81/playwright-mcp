import { expect } from '@playwright/test';
import { test } from '../test-fixture/pom-fixture';

function randomString(length: number) {
    return Math.random().toString(36).substring(2, 2 + length);
}

test('SauceDemo order flow', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.fillInformation(randomString(5), randomString(5), randomString(5));
    await checkoutPage.continue();
    await checkoutPage.finish();
    const message = await checkoutPage.getThankYouMessage();
    expect(message).toContain('Thank you for your order');
});
