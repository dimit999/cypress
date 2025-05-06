export class Browser {
  /**
   * Navigates back in browser history.
   */
  static goBack() {
    cy.go("back");
  }

  /**
   * Navigates forward in browser history.
   */
  static goForward() {
    cy.go("forward");
  }

  /**
   * Reloads the current page.
   */
  static reload() {
    cy.reload();
  }

  /**
   * Scrolls to the top of the page or scrollable container.
   */
  static scrollToTop(selector?: string) {
    if (selector) {
      cy.get(selector).scrollTo("top");
    } else {
      cy.window().then((win) => {
        win.scrollTo(0, 0);
      });
    }
  }

  static refresh() {
    cy.reload();
  }
}
