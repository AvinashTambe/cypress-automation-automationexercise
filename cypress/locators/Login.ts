export namespace Login {
  export enum Buttons {
    loginbtn = "[data-qa='login-button']",
    navbar = "[class='nav navbar-nav']",
    navbar_loginbtn = "[class='fa fa-lock']",
    navbar_userprofile = "i.fa-user",
    navbar_logout= "i.fa-lock",
  }
  export enum Inputs {
    email = "[data-qa='login-email']",
    password = "[data-qa='login-password']",
  }
  export enum Validations {
    missingdata = "Please fill in this field.",
    invalidemail = "Please include an '@' in the email address.",
    invalidcredentials = "Your email or password is incorrect!"
  }
}