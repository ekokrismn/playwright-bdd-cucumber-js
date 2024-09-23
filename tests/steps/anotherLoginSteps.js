import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);


Given('I am on the login page', async ({ loginOutline }) => {
    await loginOutline.navigateToLogin();
   
});


When('I enter valid {string} And valid {string}', async ({ loginOutline }, email, password) => {
    await loginOutline.inputCreds();
  });


When('I clicks on login button', async ({ loginOutline }) => {
    await loginOutline.clickLoginButton();
});


Then('I should be able to login', async ({ loginOutline }) => {
    await loginOutline.verifyLogin();
});