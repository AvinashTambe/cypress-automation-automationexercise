import loginPage from "../../../pages/loginPage";
// import { Login } from '../locators/Login';
// Update the import path below to the correct location if the file exists, or create the file if missing.
import { Login } from '../../../locators/Login';


describe('Login Regression Test', () => { 
    
    beforeEach(() => {
        loginPage.visitLoginpage();
    });

    it('Verify login with blank email', () => {
        loginPage.enterCredentials(undefined, Cypress.env('validpassword')); 
        loginPage.clickLoginButton();
        cy.get(Login.Inputs.email)
            .invoke('prop', 'validationMessage')
            .should('contain', Login.Validations.missingdata);
    }); 
    
    it('Verify login with blank password', () => { 
        loginPage.enterCredentials(Cypress.env('validusername'), undefined); 
        loginPage.clickLoginButton();
        cy.get(Login.Inputs.password)
            .invoke('prop', 'validationMessage')
            .should('contain', Login.Validations.missingdata);
    });
    
    it('Verify login with invalid email format ', () => { 
        const invalidEmail = 'invalidEmailFormat';
        loginPage.enterCredentials(invalidEmail, Cypress.env('validpassword'));
        loginPage.clickLoginButton();
        cy.wait(1000);
        cy.get(Login.Inputs.email)
            .invoke('prop', 'validationMessage')
            .should('contain', Login.Validations.invalidemail);       
    });
    
    it('Verify that password field hides input', () => { 
        loginPage.enterCredentials(Cypress.env('validusername'), Cypress.env('validpassword'));
        cy.get(Login.Inputs.password)
            .should('have.attr', 'type', 'password');
    });

    it('Verify session persists after successful login', () => { 
        loginPage.enterCredentials(Cypress.env('validusername'), Cypress.env('validpassword'));
        loginPage.clickLoginButton();
        const validUserProfile = Cypress.env('validuserprofile');
        loginPage.validateUserProfiledetails(validUserProfile);
        cy.reload();
        loginPage.validateUserProfiledetails(validUserProfile);
        loginPage.clickLogoutButton();
    });

    it('Verify logout clears the session', () => {
        loginPage.enterCredentials(Cypress.env('validusername'), Cypress.env('validpassword'));
        loginPage.clickLoginButton();
        const validUserProfile = Cypress.env('validuserprofile');
        loginPage.validateUserProfiledetails(validUserProfile);
        loginPage.clickLogoutButton();
        cy.reload();
        cy.get(Login.Buttons.navbar_userprofile).should('not.exist');
    });

    it('Verify "Signup/Login" link redirects to login page', () => { 
        loginPage.visitLoginpage();
    });

});