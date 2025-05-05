declare namespace Cypress {
  interface Chainable {
    /**
     * Registers a new user via UI and returns credentials.
     * @param firstName
     * @param lastName
     */
    registerUser(firstName?: string, lastName?: string): Chainable<{
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }>;
  }
}
