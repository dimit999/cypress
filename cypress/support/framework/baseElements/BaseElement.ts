import "cypress-real-events/support";
import { ElementState } from "./types";
import { DEFAULT_UI_TIMEOUT } from "@support/constants/ui";

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
  get(timeout = DEFAULT_UI_TIMEOUT) {
    return this.isXpath
      ? cy.xpath(this.selector, { timeout })
      : cy.get(this.selector, { timeout });
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
   * Waits and Asserts the element is visible.
   */
  shouldBeVisible() {
    this.get().should("be.visible");
  }

  /**
   * Waits until the element's location is stable (not moving) for a short period.
   * This checks the element's bounding box multiple times to ensure it does not move.
   */
  waitUntilLocationStable(checks = 3, delay = 100): Cypress.Chainable<void> {
    let prevRect: DOMRect | null = null;
    let stableCount = 0;

    // Check the element's position at regular intervals
    const checkStable = (): Cypress.Chainable<void> => {
      // @ts-expect-error: realHover is provided by cypress-real-events
      return this.get().then(($el) => {
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
          stableCount = 1; // Reset count if the position changed
        }

        prevRect = rect;

        // If the position has been stable for 'checks' iterations, resolve the promise
        if (stableCount >= checks) {
          return cy.wrap(undefined);
        }

        // If not stable yet, wait for 'delay' ms and then check again
        return cy.wait(delay).then(() => checkStable()); // Retry the check
      });
    };

    // Start the check process
    return checkStable();
  }

  /**
   * Waits until the element's location is stable (not moving) for a short period and is visible.
   * This checks the element's bounding box multiple times to ensure it does not move.
   * Returns a Cypress chainable for further chaining.
   */
  waitUntilStableAndVisible(
    timeout = DEFAULT_UI_TIMEOUT,
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

  waitElementState(state: ElementState, timeout = DEFAULT_UI_TIMEOUT) {
    const getElement = () =>
      this.isXpath
        ? cy.xpath(this.selector, { timeout })
        : cy.get(this.selector, { timeout });

    switch (state) {
      case "visible":
        return getElement().should("be.visible");
      case "not_visible":
        return getElement().should("not.be.visible");
      case "present":
        return getElement().should("exist");
      case "absent":
        return getElement().should("not.exist");
      default:
        throw new Error(`Unknown state: ${state}`);
    }
  }

  /**
   * Waits until the specified attribute is absent (undefined) from the element.
   * @param attr - The attribute name to check for absence.
   * @param timeout - Optional timeout in ms.
   * @returns Cypress.Chainable
   */
  waitUntilAttributeAbsent(
    attr: string,
    timeout = DEFAULT_UI_TIMEOUT,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.get(timeout).should(($el) => {
      const value = $el.attr(attr);
      expect(value, `Attribute "${attr}" should be absent`).to.be.undefined;
    });
  }
}
