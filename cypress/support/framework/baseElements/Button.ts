import { BaseElement } from "./BaseElement";

export class Button extends BaseElement {
  /**
   * Clicks a button by its text content (static, CSS only).
   */
  static clickByText(text: string) {
    cy.contains("button", text).click();
  }
}
