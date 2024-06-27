import { userRegistrationElements } from "../../PageObjects/PageActions/userRegistrationElements.cy";

// creating object for userRegistrationElements
const UserRegistratin_elements = new userRegistrationElements();

describe("User Registration", () => {
  beforeEach(() => {
    cy.visit("https://presentation.dqhebbvx58vub.amplifyapp.com/auth/sign-up");
  });

  it("Succesful Registraion", () => {
    UserRegistratin_elements.userName("Djangmah Benedicta");
    UserRegistratin_elements.userEmail("r2z2iwv9tj@mxscout.com");
    UserRegistratin_elements.userPassword("Get@2021");
    UserRegistratin_elements.SignUpButton();

    cy.contains("Registration Successful").should("be.visible");
  });
});
