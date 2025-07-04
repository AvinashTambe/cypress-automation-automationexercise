import { Signup } from '../../../locators/Signup';
import signupPage from '../../../pages/signupPage';
import loginPage from '../../../pages/loginPage';
import { faker } from '@faker-js/faker';
import { generateRandomSignupData } from '../../../support/utils/generateUser';
import { filepath } from '../../../support/paths/file-paths';

const userData = generateRandomSignupData();

describe ('Signup Page Tests', () => {
    
    beforeEach(() => {
        signupPage.visitSignupPage();
    });

    it('STC01 - Verify signup form opens successfully', () => {
        signupPage.visitSignupPage();
    });

    it('STC02 - Verify user can enter name and email to start signup', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
    });

    it('STC03 - Verify user can create account with required fields', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        signupPage.createAccount(userData);
        signupPage.clickCreateAccountButton();
        signupPage.validateAccountCreated();
        const userDetails = {
            ...userData,
            signupName: randomName,
            signupEmail: randomEmail
        };

        cy.writeFile(filepath.signup.userdata, userDetails);
    });

    it('STC04 - Verify Continue button works after account creation', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.enterSignupDetails(randomName, randomEmail);
        signupPage.clickSignUpButton();
        signupPage.createAccount(userData);
        signupPage.clickCreateAccountButton();
        signupPage.validateAccountCreated();
        const userDetails = {
            ...userData,
            signupName: randomName,
            signupEmail: randomEmail
        };
        cy.writeFile(filepath.signup.userdata, userDetails);
        signupPage.clickContinueButton();
        cy.readFile(filepath.signup.userdata).then((data) => {
            console.log('User Data:', data.signupName);
            loginPage.validateUserProfiledetails(data.signupName);
        });
    });

});