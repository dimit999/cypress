import "cypress-real-events/support";

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
   * Hovers over the element (using trigger 'mouseover' as fallback if realHover is missing).
   */
  hover() {
    // @ts-expect-error: realHover is provided by cypress-real-events
    if (typeof this.get().realHover === "function") {
      // @ts-expect-error: realHover is provided by cypress-real-events
      this.get().should("be.visible").realHover();
    } else {
      this.get().should("be.visible").trigger("mouseover", { force: true });
    }
  }

  /**
   * Gets the value of the specified attribute from the element.
   * @param attr Attribute name
   * @returns Cypress.Chainable with attribute value
   */
  getAttribute(attr: string) {
    return this.get().invoke("attr", attr);
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
    this.get().should("be.visible");
  }

  /**
   * Waits until the element is visible.
   */
  waitUntilVisible(timeout = 4000) {
    this.get().should("be.visible", { timeout });
  }

  /**
   * Waits until the element's location is stable (not moving) for a short period.
   * This checks the element's bounding box multiple times to ensure it does not move.
   */
  waitUntilLocationStable(checks = 3, delay = 100): Cypress.Chainable<void> {
    let prevRect: any;
    let stableCount = 0;
    const self = this;

    function checkStable(resolve: () => void) {
      self.get().then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        if (
          prevRect &&
          rect.top === prevRect.top &&
          rect.left === prevRect.left &&
          rect.width === prevRect.width &&
          rect.height === prevRect.height
        ) {
          stableCount++;
        } else {
          stableCount = 1;
        }
        prevRect = rect;
        if (stableCount >= checks) {
          resolve();
        } else {
          setTimeout(() => checkStable(resolve), delay);
        }
      });
    }
    // The fix: wrap the custom promise in cy.wrap and resolve to undefined
    return cy.wrap(null).then(() => {
      return new Cypress.Promise<void>((resolve) => {
        checkStable(resolve);
      });
    });
  }

  /**
   * Waits until the element's location is stable (not moving) for a short period and is visible.
   * This checks the element's bounding box multiple times to ensure it does not move.
   * Returns a Cypress chainable for further chaining.
   */
  waitUntilStableAndVisible(
    timeout = 10000,
    checks = 3,
    delay = 100,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.waitUntilLocationStable(checks, delay).then(() =>
      this.get().should("be.visible", { timeout }),
    );
  }
  /**
   * Gets the text content of the element.
   */
  getText() {
    return this.get().invoke("text");
  }
}
