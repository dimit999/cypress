import { Input } from "@support/framework/baseElements/Input";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";

export class LoginPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector =
    "//div[contains(@class, 'container')]//span[text()='Sign In']";
  private emailInput = new Input("#email");
  private passwordInput = new Input("#pass");
  private signInButton = new Button(this.uniquePageSelector, true);

  /**
   * Navigates the browser to the customer login page.
   *
   * @return {void} This method does not return a value.
   */
  visit() {
    super.visit("/customer/account/login/");
  }

  /**
   * Fills the email input field with the provided email address.
   *
   * @param {string} email - The email address to be entered into the email input field.
   * @return {void} This method does not return any value.
   */
  fillEmail(email: string) {
    this.emailInput.type(email);
  }

  /**
   * Fills in the password input field with the provided password.
   *
   * @param {string} password - The password to be entered into the password input field.
   * @return {void}
   */
  fillPassword(password: string) {
    this.passwordInput.type(password);
  }

  /**
   * Triggers the click action on the "Sign In" button.
   *
   * @return {void} This method does not return anything.
   */
  submit() {
    this.signInButton.click();
  }

  /**
   * Returns the unique element selector for the login page.
   * @returns The unique element selector.
   */
  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return true;
  }
}
