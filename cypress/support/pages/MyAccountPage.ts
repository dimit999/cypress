import { Label } from '../ui/baseElements/Label';
import { Button } from '../ui/baseElements/Button';
import { NavigationPanel } from '@support/forms/NavigationPanel';
import { BasePage } from '../ui/basePage/BasePage';

export class MyAccountPage extends BasePage {
    // Element selectors (for reuse)
    private uniquePageSelector = '.box-information .box-content';
    private welcomeMessage = new Label('.greet.welcome');
    private contactInfo = new Label(this.uniquePageSelector);
    private successMessageLabel = new Label('//div[contains(@class, \'message-success\')]', true);
    private userSwitcherButton = new Button('(//button[contains(@class, \'switch\')])[1]', true);
    private userSignOut = new Button('(//div[contains(@class, \'menu\')]//a[contains(@href, \'logout\')])[1]', true);

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
     * Signs the user out of the application by interacting with the user switcher button
     * and the sign-out option using their XPath selectors.
     *
     * @return {void} No return value.
     */
    signOut() {
        this.userSwitcherButton.click();
        this.userSignOut.click();
    }

    /**
     * Gets the navigation panel instance for this page.
     */
    getNavigationPanel() {
        return new NavigationPanel();
    }

    protected getUniqueElementSelector(): string {
        return this.uniquePageSelector;
    }


    protected getUniqueElementIsXpath(): boolean {
        return false;
    }
}