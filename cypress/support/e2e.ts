import "./commands";
import "./registerUser";
import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (err) => {
  // Ignore specific error about AddFotoramaVideoEvents
  if (
    err.message &&
    err.message.includes("AddFotoramaVideoEvents is not a function")
  ) {
    return false; // prevents Cypress from failing the test
  }
  // Ignore errors about reading 'data' of undefined
  if (
    err.message &&
    err.message.includes("Cannot read properties of undefined (reading 'data')")
  ) {
    return false;
  }
  // Ignore errors about reading 'clone' of undefined
  if (
    err.message &&
    err.message.includes(
      "Cannot read properties of undefined (reading 'clone')",
    )
  ) {
    return false;
  }
  // Ignore errors about reading 'setOptions' of undefined
  if (
    err.message &&
    err.message.includes(
      "Cannot read properties of undefined (reading 'setOptions')",
    )
  ) {
    return false;
  }
  // Let all other errors fail the test
  return true;
});
