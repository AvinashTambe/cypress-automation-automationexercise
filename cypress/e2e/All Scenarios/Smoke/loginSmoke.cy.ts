import { Login } from '../../../locators/Login';
import loginPage from '../../../pages/loginPage';

describe('Login Smoke Test', () => {
  beforeEach(() => {
    loginPage.visitLoginpage();
  });

  it('Verify login page loads successfully', () => { 
    loginPage.enterEmail(Cypress.env('validusername'));
    loginPage.enterPassword(Cypress.env('validpassword'));
    loginPage.clickLoginButton();
  });


});