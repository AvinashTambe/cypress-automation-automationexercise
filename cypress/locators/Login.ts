export namespace Login {
  export enum Buttons {
    loginbtn = "[data-qa='login-button']",
    navbar = "[class='nav navbar-nav']",
    navbar_loginbtn = "[class='fa fa-lock']",
  }
  export enum Inputs {
    email = "[data-qa='login-email']",
    password = "[data-qa='login-password']",
  }
  export enum Validations {
    missingdata = "Please fill in this field.",
    invalidemail = "Please include an '@' in the email address.",
    incorrectcredentials = "Your email or password is incorrect!"
  }
}