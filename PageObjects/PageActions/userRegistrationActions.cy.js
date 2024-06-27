const userRegistrationEuuuuu = require("../PageElements/userRegistrationElementt.json");

export class userRegistrationElements {
  // creating global varibles(locators are the global varibles)

  // methed for username
  userName(userNamePatient) {
    cy.get(userRegistrationEuuuuu.UserRegistrationPageLocators.userNamePatient);
    return;
  }

  // method for userPssword
  userPassword(userPasswordPatient) {
    cy.get(
      userRegistrationEuuuuu.UserRegistrationPageLocators.userEmailPatient
    );
    return;
  }

  // method for emal
  userEmail(userEmailPatient) {
    cy.get(
      userRegistrationEuuuuu.UserRegistrationPageLocators.userEmailPatient
    );
    return;
  }

  // method for login button
  SignUpButton() {
    cy.get(userRegistrationEuuuuu.UserRegistrationPageLocators.SignUpButton);
  }
}
