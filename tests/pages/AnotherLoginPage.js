import { expect } from '@playwright/test';

class AnotherLoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#input-email');
        this.passwordField = page.locator('#input-password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.verifySuccesLogin = page.getByRole('heading', { name: 'My Account' });
    }

    async navigateToLogin() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login", {waitUntil: 'commit'});
    }

    async inputCreds() {
        await this.emailField.fill('ekokrismn@gmail.com');
        await this.passwordField.fill('Mobile123@');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyLogin() {
        await expect(this.verifySuccesLogin).toBeVisible();
    }
}

export { AnotherLoginPage }