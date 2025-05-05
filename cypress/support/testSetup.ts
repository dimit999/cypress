// cypress/support/testSetup.ts

export interface RegisteredUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

/**
 * Sets up a registered user before each test and provides accessors for user data.
 * Usage:
 *   const { getUser } = setupUserRegistration();
 *   // in test: getUser().email
 */
export function setupUserRegistration(firstName = 'Test', lastName = 'User') {
  let user: RegisteredUser;

  beforeEach(() => {
    cy.registerUser(firstName, lastName).then((u) => {
      user = u;
    });
  });

  return {
    getUser: () => user,
  };
}
