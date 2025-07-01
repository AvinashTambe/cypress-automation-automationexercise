/// <reference types="cypress" />
import { Login } from '../locators/Login';

class LoginPage {

    visitLoginpage() {
        cy.visitAutomationExercise();
        cy.get(Login.Buttons.navbar).should('be.visible');
        cy.get(Login.Buttons.navbar_loginbtn).click();
        cy.url().should('include', '/login');  
    }
    
    enterEmail(email: string) {
        cy.get(Login.Inputs.email).type(email);
    }

    enterPassword(password: string) {
        cy.get(Login.Inputs.password).type(password);
    }

    clickLoginButton() {
        cy.get(Login.Buttons.loginbtn).click();
    }

}

export default new LoginPage();