export abstract class BasePage {
  constructor() {}

  /**
   * Visits the given URL or page path.
   * @param url The URL or relative path to visit.
   */
  visit(url: string) {
    cy.visit(url);
    this.isOpened();
  }

  /**
   * Waits until the page is fully loaded (document ready).
   */
  waitUntilLoaded(timeout = 10000) {
    cy.document({ timeout }).should("have.property", "readyState", "complete");
  }

  /**
   * Scrolls to the element specified by selector (CSS or XPath).
   */
  scrollToElement(selector: string, isXpath = false) {
    if (isXpath) {
      cy.xpath(selector).scrollIntoView();
    } else {
      cy.get(selector).scrollIntoView();
    }
  }

  /**
   * Checks if the page is opened by asserting a unique element is visible.
   * Override getUniqueElementSelector and getUniqueElementIsXpath in child classes.
   */
  isOpened(timeout = 10000) {
    const selector = this.getUniqueElementSelector();
    const isXpath = this.getUniqueElementIsXpath
      ? this.getUniqueElementIsXpath()
      : false;
    if (!selector) {
      throw new Error("Unique element selector is not defined for this page.");
    }
    if (isXpath) {
      cy.xpath(selector, { timeout }).should("be.visible");
    } else {
      cy.get(selector, { timeout }).should("be.visible");
    }
  }

  /**
   * Returns a unique selector for the page (should be overridden).
   */
  protected abstract getUniqueElementSelector(): string;

  /**
   * Returns true if the unique selector is XPath (should be overridden if needed).
   */
  protected getUniqueElementIsXpath(): boolean {
    return false;
  }
}
