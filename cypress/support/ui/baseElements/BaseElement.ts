export abstract class BaseElement {
  protected selector: string;
  protected isXpath: boolean;

  constructor(selector: string, isXpath = false) {
    this.selector = selector;
    this.isXpath = isXpath;
  }

  /**
   * Gets the Cypress chainable for the element.
   */
  get() {
    return this.isXpath ? cy.xpath(this.selector) : cy.get(this.selector);
  }

  /**
   * Clicks the element.
   */
  click() {
    this.get().click();
  }

  /**
   * Scrolls the element into view.
   */
  scrollIntoView() {
    this.get().scrollIntoView();
  }

  /**
   * Asserts the element is visible.
   */
  shouldBeVisible() {
    this.get().should('be.visible');
  }
}
