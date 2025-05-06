import "./commands";
import "./registerUser";
import "cypress-mochawesome-reporter/register";

// List of known non-critical errors to ignore
const ignoredErrors = [
  "AddFotoramaVideoEvents is not a function",
  "Cannot read properties of undefined (reading 'data')",
  "Cannot read properties of undefined (reading 'clone')",
  "Cannot read properties of undefined (reading 'setOptions')",
];

Cypress.on("uncaught:exception", (err) => {
  const message = err.message || "";

  // Ignore error if it matches any of the known patterns
  if (ignoredErrors.some((pattern) => message.includes(pattern))) {
    return false; // prevent test failure
  }

  return true; // allow all other errors to fail the test
});
