import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';

export const test = base.extend(({
    loginPageObject: async ({page}, use) => {
        const loginSteps = new LoginPage(page);
        await use(loginSteps);
    } 
}));