import { BaseElement } from "./BaseElement";

export class Button extends BaseElement {
  /**
   * Clicks the button (inherited from BaseElement).
   */
  click() {
    super.click();
  }

  /**
   * Clicks a button by its text content (static, CSS only).
   */
  static clickByText(text: string) {
    cy.contains("button", text).click();
  }
}
