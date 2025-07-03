import signupPage from "../../../pages/signupPage";
import { faker } from '@faker-js/faker';
import { generateRandomSignupData, SignupData } from '../../../support/utils/generateUser';
import { filepath } from '../../../support/paths/file-paths';
import { Signup } from "../../../locators/Signup";

const userData: SignupData = generateRandomSignupData();

describe('Signup Regression Test Suite', () => {
    
    beforeEach(() => {
        signupPage.visitSignupPage();
    });

    it.only('RTC01: Verify all required fields validation', () => {
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

    });

    it('RTC03: Verify pre-filled `name` and `email` are disabled after clicking signup ', () => {

    });

    it('RTC04: Verify optional fields can be left blank ', () => {

    });

    it('RTC05: Verify dropdowns - Date of birth', () => {

    });

    it('RTC06: Verify newsletter checkbox toggling', () => {

    });

    it('RTC07: Verify optional options checkbox toggling', () => {

    });

    it('RTC08: Verify country dropdown selection', () => {

    });

    it('RTC09: Verify zip code accepts alphanumeric input', () => {

    });

    it('RTC10: Verify form reset on reload', () => {

    });

    it('RTC11: Verify duplicate signup email validation', () => {

    });
});