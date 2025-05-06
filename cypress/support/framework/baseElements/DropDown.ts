import { BaseElement } from './BaseElement';

export class DropDown extends BaseElement {
  /**
   * Selects an option by value.
   */
  selectByValue(value: string) {
    this.get().select(value);
  }

  /**
   * Selects an option by visible text.
   */
  selectByText(text: string) {
    this.get().select(text);
  }
}
