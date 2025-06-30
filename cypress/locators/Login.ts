namespace Login {

    enum Buttons { 
        loginbtn = "[data-qa='login-button']",
    }

    enum Inputs { 
        emailinput = "[data-qa='login-email']",
        passwordinput = "[data-qa='login-password']", 
    }

    enum Validations {
        missingdata= "Please fill in this field.",
        invalidemail = "Please include an '@' in the email address.",
        incorrectcredentials = "Your email or password is incorrect!"
    } 
} 

export default Login;