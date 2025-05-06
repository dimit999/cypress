import { Label } from "@support/framework/baseElements/Label";
import { NavigationPanel } from "../forms/NavigationPanel";
import { BasePage } from "@support/framework/basePage/BasePage";
import { HeaderForm } from "@support/forms/HeaderForm";

export class MyAccountPage extends BasePage {
  // Element selectors (for reuse)
  private uniquePageSelector = ".box-information .box-content";
  private welcomeMessage = new Label(".greet.welcome");
  private contactInfo = new Label(this.uniquePageSelector);
  private successMessageLabel = new Label(
    "//div[contains(@class, 'message-success')]",
    true,
  );
  /**
   * Retrieves the welcome message displayed after a successful login.
   *
   * The welcome message is contained in an element with the class ` greet welcome `.
   * @returns The welcome message element.
   */
  getWelcomeMessage() {
    return this.welcomeMessage.get();
  }

  /**
   * Retrieves the contact information element using the defined XPath selector.
   *
   * @return {Cypress.Chainable} A Cypress chainable object representing the contact information element.
   */
  getContactInformation() {
    return this.contactInfo.get();
  }

  /**
   * Retrieves the element containing the success message using a specific CSS selector.
   *
   * @return {Cypress.Chainable<JQuery<HTMLElement>>} A chainable Cypress object representing the success message
   * element.
   */
  getSuccessMessage() {
    return this.successMessageLabel.get();
  }

  /**
   * Gets the navigation panel instance for this page.
   */
  getNavigationPanel() {
    return new NavigationPanel();
  }

  /**
   * Gets the header form instance for this page.
   */
  getHeaderForm() {
    return new HeaderForm();
  }

  protected getUniqueElementSelector(): string {
    return this.uniquePageSelector;
  }

  protected getUniqueElementIsXpath(): boolean {
    return false;
  }
}
