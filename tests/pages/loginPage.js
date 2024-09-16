import { expect } from '@playwright/test';


class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('#userName');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login')
        this.usernameValue = page.locator('#userName-value')
        this.errorMessage = page.locator('#name');
    }

    async navigateToLogin () {
        await this.page.goto('https://demoqa.com/login', {waitUntil: "commit"});
    }

    async fillUsername () {
        const username = 'ekokrismn'
        await this.usernameField.fill(username);
    }

    async fillPassword () {
        const password = 'Mobile123@'
        await this.passwordField.fill(password);
    }

    async clickLogin () {
        await this.loginButton.click()
    }

    async verifySuccessLogin() {
        await expect(this.usernameValue).toBeVisible({waitUntil: 'load'});
        await expect(this.page).toHaveURL(new RegExp('https://demoqa.com/profile'));
        await expect(this.usernameValue).toHaveText('ekokrismn');
    }

    async verifyUserIsNotAbleToLogin() {
        await expect(this.page).toHaveURL(new RegExp('https://demoqa.com/login'));
        await expect(this.errorMessage).toBeVisible({waitUntil: 'load'});
    }
}

export { LoginPage };