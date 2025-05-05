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
   * Hovers over the element (using trigger 'mouseover').
   */
  hover() {
    this.get().trigger('mouseover');
  }

  /**
   * Gets the value of the specified attribute from the element.
   * @param attr Attribute name
   * @returns Cypress.Chainable with attribute value
   */
  getAttribute(attr: string) {
    return this.get().invoke('attr', attr);
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
