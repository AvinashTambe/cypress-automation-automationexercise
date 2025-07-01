/// <reference types="cypress" />
import { Login } from '../locators/Login';

class LoginPage {

    visitLoginpage() {
        cy.visitAutomationExercise();
        cy.get(Login.Buttons.navbar).should('be.visible');
        cy.get(Login.Buttons.navbar_loginbtn).click();
        cy.url().should('include', '/login');  
    }
    

    enterCredentials(email?: string, password?: string) {
        if (email !== undefined) {
            cy.get(Login.Inputs.email).type(email);
        }
        if (password !== undefined) {
            cy.get(Login.Inputs.password).type(password);
        }
    }

    clickLoginButton() {
        cy.get(Login.Buttons.loginbtn)
            .should('be.visible')
            .should('not.be.disabled')
            .should('have.text', 'Login')
            .click();
    }

    validateUserProfiledetails() {
        cy.get(Login.Buttons.navbar_userprofile)
            .parent()
            .should('be.visible')
            .should('not.be.disabled')
            .should('contain.text', `Logged in as ${Cypress.env('validuserprofile')}`);
    }

    clickLogoutButton() {
        cy.get(Login.Buttons.navbar_loginbtn)
            .parent()
            .should('be.visible')
            .should('not.be.disabled')
            .should('contain.text', 'Logout')
            .click();
    }
}

export default new LoginPage();