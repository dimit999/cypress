import { setupUserRegistration } from "cypress/support/testSetup";
import { LoginPage } from "@pages/LoginPage";
import { MyAccountPage } from "@pages/MyAccountPage";

const { getUser } = setupUserRegistration();

describe("Registration flow with login validation", () => {
  it("should login with newly registered user", () => {
    const myAccountPage = new MyAccountPage();
    myAccountPage.header.signOut();

    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillEmail(getUser().email);
    loginPage.fillPassword(getUser().password);
    loginPage.submit();
    myAccountPage.getWelcomeMessage().should("contain", getUser().firstName);
    myAccountPage.getContactInformation().should("contain", getUser().email);
  });
});
