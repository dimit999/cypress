import { Input } from "@support/framework/baseElements/Input";
import { Button } from "@support/framework/baseElements/Button";
import { BasePage } from "@support/framework/basePage/BasePage";

export class RegisterPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector = "#lastname";
  private firstNameInput = new Input("#firstname");
  private lastNameInput = new Input(this.uniquePageSelector);
  private emailInput = new Input("#email_address");
  private passwordInput = new Input("#password");
  private confirmPasswordInput = new Input("#password-confirmation");
  private submitButton = new Button("button[title='Create an Account']");

  /**
   * Navigates to the customer account creation page.
   *
   * @return {void} This method does not return a value.
   */
  visit() {
    super.visit("/customer/account/create/");
  }

  /**
   * Fills the first name input field with the provided name.
   *
   * @param {string} name - The first name to be entered in the input field.
   * @return {void} This method does not return a value.
   */
  fillFirstName(name: string) {
    this.firstNameInput.type(name);
  }

  /**
   * Fills the last name input field with the provided name.
   *
   * @param {string} name - The name to be entered into the last name input field.
   * @return {void} No return value.
   */
  fillLastName(name: string) {
    this.lastNameInput.type(name);
  }

  /**
   * Fills the email address field with the provided email.
   *
   * @param {string} email - The email address to input into the field.
   * @return {void} Does not return any value.
   */
  fillEmail(email: string) {
    this.emailInput.type(email);
  }

  /**
   * Fills in the password input field with the provided password.
   *
   * @param {string} password - The password to be entered into the input field.
   * @return {void} This method does not return any value.
   */
  fillPassword(password: string) {
    this.passwordInput.type(password);
  }

  /**
   * Fills the confirm password field with the provided password.
   *
   * @param {string} password - The password to be entered into the confirm password field.
   * @return {void} Does not return a value.
   */
  fillConfirmPassword(password: string) {
    this.confirmPasswordInput.type(password);
  }

  /**
   * Submits the form by simulating a click action on the button with the title "Create an Account".
   *
   * @return {void} Does not return any value.
   */
  submit() {
    this.submitButton.click();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return false;
  }
}
