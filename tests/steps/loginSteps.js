import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);


Given('the user is on the login page', async ({ loginPageObject }) => {
    await loginPageObject.navigateToLogin();
  });
  
  
  When('the user enters valid username', async ({ loginPageObject }) => {
    await loginPageObject.fillUsername();
  });
  
  
  When('the user enters valid password', async ({ loginPageObject }) => {
    await loginPageObject.fillPassword();
  });
  
  
  When('the user click on login button', async ({ loginPageObject }) => {
    await loginPageObject.clickLogin();
  });
  
  
  Then('the user should be redirected to profile page', async ({ loginPageObject }) => {
    await loginPageObject.verifySuccessLogin();
  });