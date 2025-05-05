import { Label } from '../ui/baseElements/Label';
import { Button } from '../ui/baseElements/Button';
import { NavigationPanel } from '../ui/forms/NavigationPanel';
import { BasePage } from '../ui/basePage/BasePage';

export class MyAccountPage extends BasePage {
    // Element selectors (for reuse)
    private welcomeMessage = '.greet.welcome';
    private contactInfo = '.box-information .box-content';
    private successMessageLabel = '//div[contains(@class, \'message-success\')]';
    private userSwitcherButton = '(//button[contains(@class, \'switch\')])[1]';
    private userSignOut = '(//div[contains(@class, \'menu\')]//a[contains(@href, \'logout\')])[1]';
    private contactInformationLabel = '//div[contains(@class, \'information\')]//p';

    /**
     * Retrieves the welcome message displayed after a successful login.
     *
     * The welcome message is contained in an element with the class ` greet welcome `.
     * @returns The welcome message element.
     */
    getWelcomeMessage() {
        return new Label(this.welcomeMessage).get();
    }

    /**
     * Retrieves the contact information element using the defined XPath selector.
     *
     * @return {Cypress.Chainable} A Cypress chainable object representing the contact information element.
     */
    getContactInformation() {
        return new Label(this.contactInfo).get();
    }

    /**
     * Retrieves the element containing the success message using a specific CSS selector.
     *
     * @return {Cypress.Chainable<JQuery<HTMLElement>>} A chainable Cypress object representing the success message
     * element.
     */
    getSuccessMessage() {
        return new Label(this.successMessageLabel, true).get();
    }

    /**
     * Signs the user out of the application by interacting with the user switcher button
     * and the sign-out option using their XPath selectors.
     *
     * @return {void} No return value.
     */
    signOut() {
        new Button(this.userSwitcherButton, true).click();
        new Button(this.userSignOut, true).click();
    }

    /**
     * Gets the navigation panel instance for this page.
     */
    getNavigationPanel() {
        return new NavigationPanel();
    }

    protected getUniqueElementSelector(): string {
        return this.contactInfo;
    }


    protected getUniqueElementIsXpath(): boolean {
        return false;
    }
}