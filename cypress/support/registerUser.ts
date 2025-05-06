import { RegisterPage } from "@support/pages/RegisterPage";
import { MyAccountPage } from "@support/pages/MyAccountPage";

/**
 * Registers a new user via UI and returns the credentials.
 * Usage: cy.registerUser().then(({ email, password }) => ...)
 */
Cypress.Commands.add(
  "registerUser",
  (firstName = `Test_${Date.now()}`, lastName = "User") => {
    const timestamp = Date.now();
    const email = `testuser_${timestamp}@example.com`;

    return cy.getDataFromJson("testData.json").then((data) => {
      const password = data.defaultPassword;
      const registerPage = new RegisterPage();

      registerPage.visit();
      registerPage.fillFirstName(firstName);
      registerPage.fillLastName(lastName);
      registerPage.fillEmail(email);
      registerPage.fillPassword(password);
      registerPage.fillConfirmPassword(password);
      registerPage.submit();

      const myAccountPage = new MyAccountPage();
      myAccountPage
        .getSuccessMessage()
        .should("contain", "Thank you for registering");

      return cy.wrap({ email, password, firstName, lastName });
    });
  },
);
