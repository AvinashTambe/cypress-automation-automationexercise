import { Signup } from '../locators/Signup';
import { Login } from '../locators/Login';

class SignupPage {

    visitSignupPage = () => {
        cy.visitAutomationExercise();
        cy.get(Login.Buttons.navbar).should('be.visible');
        cy.get(Login.Buttons.navbar_loginbtn).click();
        cy.url().should('include', '/login');
    }

    enterSignupDetails(name?: string, email?: string) {
        if (name !== undefined) {
            cy.get(Signup.Inputs.signupname).type(name);
        }
        if (email !== undefined) {
            cy.get(Signup.Inputs.signupemail).type(email);
        }
    }

    clickSignUpButton() {
        cy.get(Signup.Buttons.signupbtn)
            .should('be.visible')
            .should('not.be.disabled')
            .should('have.text', 'Signup')
            .click();
    }

    createAccount(userData?: any) {
        //cy.get(Signup.Inputs.name).should('be.disabled');
        //cy.get(Signup.Inputs.email).should('be.disabled');
        cy.get(`${Signup.Buttons.titleradio} input[type="radio"][value="Mr"]`).check({ force: true });

        if (userData.password) cy.get(Signup.Inputs.password).type(userData.password);
        if (userData.birthDay) cy.get(Signup.Buttons.daydropdown).select(userData.birthDay);
        if (userData.birthMonth) cy.get(Signup.Buttons.monthsdropdown).select(userData.birthMonth);
        if (userData.birthYear) cy.get(Signup.Buttons.yearsdropdown).select(userData.birthYear);

        cy.get(Signup.Buttons.newslettercheckbox).check({ force: true });
        cy.get(Signup.Buttons.optionscheckbox).check({ force: true });

        if (userData.firstName) cy.get(Signup.Inputs.first_name).type(userData.firstName);
        if (userData.lastName) cy.get(Signup.Inputs.last_name).type(userData.lastName);
        if (userData.company) cy.get(Signup.Inputs.company).type(userData.company);
        if (userData.address) cy.get(Signup.Inputs.address).type(userData.address);
        if (userData.address2) cy.get(Signup.Inputs.address2).type(userData.address2);
        if (userData.state) cy.get(Signup.Inputs.state).type(userData.state);
        if (userData.city) cy.get(Signup.Inputs.city).type(userData.city);
        if (userData.zipcode) cy.get(Signup.Inputs.zipcode).type(userData.zipcode);
        if (userData.mobileNumber) cy.get(Signup.Inputs.mobile_number).type(userData.mobileNumber);
    }

    clickCreateAccountButton() {
        cy.get(Signup.Buttons.createaccountbtn)
            .should('be.visible')
            .should('not.be.disabled')
            .should('have.text', 'Create Account')
            .click();
    }

    validateAccountCreated() {
        cy.get(Signup.Inputs.account_created)
            .should('be.visible')
            .should('contain.text', Signup.Validations.accountcreated);
        cy.get(Signup.Inputs.account_created)
            .parent()
            .should('contain.text', Signup.Validations.accountsuccessmsg);
    }

    clickContinueButton() {
        cy.get(Signup.Buttons.continuebtn)
            .should('be.visible')
            .should('not.be.disabled')
            .should('have.text', 'Continue')
            .click();
    }
} 

export default new SignupPage();