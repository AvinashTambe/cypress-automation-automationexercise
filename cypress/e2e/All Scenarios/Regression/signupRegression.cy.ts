import signupPage from "../../../pages/signupPage";
import { da, faker } from '@faker-js/faker';
import { generateRandomSignupData, SignupData } from '../../../support/utils/generateUser';
import { filepath } from '../../../support/paths/file-paths';
import { Signup } from "../../../locators/Signup";
import loginPage from "../../../pages/loginPage";

const userData: SignupData = generateRandomSignupData();

describe('Signup Regression Test Suite', () => {
    
    beforeEach(() => {
        signupPage.visitSignupPage();
    });

    it('RTC01: Verify all required fields validation', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();

        // List of all mandatory fields as per Signup.Inputs
        const mandatoryFields = [
            'password',
            'first_name',
            'last_name',
            'address',
            'state',
            'city',
            'zipcode',
            'mobile_number'
        ];

        // Mapping from Signup.Inputs keys to userData keys
        const fieldMappings: { [key: string]: keyof SignupData } = {
            password: 'password',
            first_name: 'firstName',
            last_name: 'lastName',
            address: 'address',
            countrydropdown: 'country',
            state: 'state',
            city: 'city',
            zipcode: 'zipcode',
            mobile_number: 'mobileNumber',
        };

        mandatoryFields.forEach((inputKey) => {
            // Reload the page to reset the form
            cy.reload();
            const dataKey = fieldMappings[inputKey];
            const { [dataKey]: omitted, ...userDataWithoutField } = userData;
            signupPage.createAccount(userDataWithoutField);
            signupPage.clickCreateAccountButton();
            cy.get(Signup.Inputs[inputKey as keyof typeof Signup.Inputs])
                .invoke('prop', 'validationMessage')
                .should('contain', Signup.Validations.missingdata);
        });
    });

    it('RTC02: Verify email format validation', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.person.firstName()+faker.person.lastName();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        cy.get(Signup.Inputs.signupemail)
            .invoke('prop', 'validationMessage')
            .should('contain', Signup.Validations.invalidemail);
    });

    it('RTC03: Verify pre-filled `email` is disabled after clicking signup ', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        cy.get(Signup.Inputs.email).should('be.disabled');
    });

    it('RTC04: Verify optional fields can be left blank ', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();

        // Omit all optional fields at once
        const { company, address2, birthDay, birthMonth, birthYear, newslettercheckbox, optionscheckbox, ...userDataWithoutOptional } = userData;
        signupPage.createAccount(userDataWithoutOptional);
        signupPage.clickCreateAccountButton();
        const userDetails = {
            ...userDataWithoutOptional,
            signupName: randomName,
            signupEmail: randomEmail
        };
        cy.writeFile(filepath.signup.userdata, userDetails);
        signupPage.validateAccountCreated();
        signupPage.clickContinueButton();
        cy.readFile(filepath.signup.userdata).then((data) => {
            console.log('User Data:', data.signupName);
            loginPage.validateUserProfiledetails(data.signupName);
        });
    });

    it('RTC05: Verify dropdowns - Date of birth', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        // Click the day dropdown and select day 10
        cy.get(Signup.Buttons.daydropdown)
            .should('exist')
            .select('10');
        // Optionally, assert the value is selected
        cy.get(Signup.Buttons.daydropdown).should('have.value', '10');
        // Click the month dropdown and select 'March'
        cy.get(Signup.Buttons.monthsdropdown)
            .should('exist')
            .select('March');
        // Optionally, assert the value is selected
        cy.get(Signup.Buttons.monthsdropdown).should('have.value', '3');
        // Click the year dropdown and select '1990'
        cy.get(Signup.Buttons.yearsdropdown)
            .should('exist')
            .select('1990');
        // Optionally, assert the value is selected
        cy.get(Signup.Buttons.yearsdropdown).should('have.value', '1990');
    });

    it('RTC06: Verify newsletter checkbox toggling', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        // Check the newsletter checkbox
        cy.get(Signup.Buttons.newslettercheckbox)
            .should('exist')
            .check()
            .should('be.checked');
        // Uncheck the newsletter checkbox
        cy.get(Signup.Buttons.newslettercheckbox)
            .uncheck()
            .should('not.be.checked');
    });

    it('RTC07: Verify country dropdown selection', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        // Select a country from the dropdown
        cy.get(Signup.Inputs.countrydropdown)
            .should('exist')
            .select('United States');
        // Optionally, assert the value is selected
        cy.get(Signup.Inputs.countrydropdown).should('have.value', 'United States');
    });

    it('RTC09: Verify zip code accepts alphanumeric input', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        // Enter alphanumeric zip code
        cy.get(Signup.Inputs.zipcode)
            .should('exist')
            .type('12345A');
        // Optionally, assert the value is entered correctly
        cy.get(Signup.Inputs.zipcode).should('have.value', '12345A');
    });

    it('RTC10: Verify form reset on reload', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        signupPage.createAccount(userData);
        // Reload the page to reset the form
        cy.reload();
        // Verify that the form fields are reset
        cy.get(Signup.Inputs.password).should('have.value', '');
        cy.get(Signup.Inputs.first_name).should('have.value', '');
        cy.get(Signup.Inputs.last_name).should('have.value', '');
        cy.get(Signup.Inputs.address).should('have.value', '');
        cy.get(Signup.Inputs.state).should('have.value', '');
        cy.get(Signup.Inputs.city).should('have.value', '');
        cy.get(Signup.Inputs.zipcode).should('have.value', '');
        cy.get(Signup.Inputs.mobile_number).should('have.value', '');
    });

    it('RTC11: Verify duplicate signup email validation', () => {
        cy.readFile(filepath.signup.userdata).then((data) => {
            const existingEmail = data.signupEmail;
            const randomName = faker.person.fullName();
            signupPage.enterSignupDetails(randomName, existingEmail);
            signupPage.clickSignUpButton();
            cy.contains(Signup.Validations.duplicateemailerror);
        });
    });
});