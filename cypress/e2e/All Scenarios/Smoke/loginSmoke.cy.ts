import { Login } from '../../../locators/Login';
import loginPage from '../../../pages/loginPage';

describe('Login Smoke Test', () => {
  beforeEach(() => {
    loginPage.visitLoginpage();
  });

  it('Verify login page loads successfully', () => { 
    loginPage.visitLoginpage();
  });


  it('Verify required fields (email & password) validation', () => { 
    loginPage.enterCredentials(undefined, Cypress.env('validpassword'));
    loginPage.clickLoginButton();
    cy.wait(1000);
    cy.get(Login.Inputs.email)
            .invoke('prop', 'validationMessage')
            .should('contain', Login.Validations.missingdata);  
  });

  it('Verify login with valid registered email and password', () => { 
    loginPage.enterCredentials(Cypress.env('validusername'), Cypress.env('validpassword'));
    const validUserProfile = Cypress.env('validuserprofile');
    loginPage.clickLoginButton();
    loginPage.validateUserProfiledetails(validUserProfile);
    loginPage.clickLogoutButton();
  });
  
  it.only('Verify login fails with incorrect password', () => { 
    const invalidPassword = 'wrongpassword';
    loginPage.enterCredentials(Cypress.env('validusername'), invalidPassword);
    loginPage.clickLoginButton();
    cy.wait(1000);
    cy.contains(Login.Validations.invalidcredentials).should('be.visible');
  });

  it('Verify login fails with unregistered email', () => {
    const unregisteredEmail = 'unregisteredEmail@gmail.com';
    loginPage.enterCredentials(unregisteredEmail, Cypress.env('validpassword'));
    loginPage.clickLoginButton();
    cy.contains(Login.Validations.invalidcredentials).should('be.visible');
  });

  it('Verify login button is clickable', () => {
    loginPage.enterCredentials(Cypress.env('validusername'), Cypress.env('validpassword'));
    loginPage.clickLoginButton();
    const validUserProfile = Cypress.env('validuserprofile');
    loginPage.validateUserProfiledetails(validUserProfile);
    loginPage.clickLogoutButton();
  });

});