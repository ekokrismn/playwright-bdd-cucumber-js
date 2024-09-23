import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';
import { AnotherLoginPage } from '../pages/anotherLoginpage';

export const test = base.extend(({
    loginPageObject: async ({page}, use) => {
        const loginSteps = new LoginPage(page);
        await use(loginSteps);
    },
    loginOutline: async ({page}, use) => {
        const anotherLogin = new AnotherLoginPage(page);
        await use(anotherLogin);
    } 
}));