import { BaseElement } from "./BaseElement";

export class Input extends BaseElement {
  /**
   * Types text into the input field.
   */
  type(text: string) {
    this.get().type(text);
  }

  /**
   * Clears and types text into the input field.
   */
  clearAndType(text: string) {
    this.get().clear().type(text);
  }
}
