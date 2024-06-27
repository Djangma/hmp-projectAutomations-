import { userAuthentication } from "../../PageObjects/PageActions/userAuthenticationActions.cy";

const  userAuthentication_element= new userAuthentication()



describe("User Registration", () => {
  beforeEach(() => {
    cy.visit("https://presentation.dqhebbvx58vub.amplifyapp.com/auth/login");
  });
 

  it("user should be login in succesfully", () => {
   

    cy.contains("Login Successful").should("be.visible");
  });


});
