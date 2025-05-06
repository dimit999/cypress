export class Browser {
  /**
   * Navigates back in browser history.
   */
  static goBack() {
    cy.go('back');
  }

  /**
   * Navigates forward in browser history.
   */
  static goForward() {
    cy.go('forward');
  }

  /**
   * Reloads the current page.
   */
  static reload() {
    cy.reload();
  }
}
