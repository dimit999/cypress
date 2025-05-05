import { BaseElement } from './BaseElement';

export class Label extends BaseElement {
  /**
   * Gets the label by text content (static, CSS only).
   */
  static getByText(text: string) {
    return cy.contains('label', text);
  }
}
