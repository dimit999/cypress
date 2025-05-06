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


  visit() {
    super.visit("/customer/account/create/");
  }

  fillFirstName(name: string) {
    this.firstNameInput.type(name);
  }

  fillLastName(name: string) {
    this.lastNameInput.type(name);
  }

  fillEmail(email: string) {
    this.emailInput.type(email);
  }

  fillPassword(password: string) {
    this.passwordInput.type(password);
  }

  fillConfirmPassword(password: string) {
    this.confirmPasswordInput.type(password);
  }

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
