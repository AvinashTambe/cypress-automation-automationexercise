export namespace Signup {

    export enum Buttons {
        signupbtn = "[data-qa='signup-button']",
        titleradio = "[data-qa='title']",
        daydropdown = "[data-qa='days']",
        monthsdropdown = "[data-qa='months']",
        yearsdropdown = "[data-qa='years']",
        newslettercheckbox = "[id='newsletter']",
        optionscheckbox= "[id='optin']",
        createaccountbtn = "[data-qa='create-account']",
        continuebtn = "[data-qa='continue-button']",
    }

    export enum Inputs { 
        signupname = "[data-qa='signup-name']",
        signupemail = "[data-qa='signup-email']",
        name = "[data-qa='name']",
        email = "[data-qa='email']",
        password = "[data-qa='password']",
        first_name = "[data-qa='first_name']",
        last_name = "[data-qa='last_name']",
        company = "[data-qa='company']",
        address = "[data-qa='address']",
        address2 = "[data-qa='address2']",
        countrydropdown = "[data-qa='country']",
        state = "[data-qa='state']",
        city = "[data-qa='city']",
        zipcode = "[data-qa='zipcode']",
        mobile_number = "[data-qa='mobile_number']",
        account_created = "[data-qa='account-created']",
    }

    export enum Validations {
        missingdata = "Please fill in this field.",
        invalidemail = "Please include an '@' in the email address.",
        accountcreated = "Account Created!",
        accountsuccessmsg = "Congratulations! Your new account has been successfully created!",
        duplicateemailerror = "Email Address already exist!",
    }
}
