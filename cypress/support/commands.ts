// Custom commands and data loaders for Cypress
import * as XLSX from "xlsx";
import { parse } from "csv-parse/sync";
import "cypress-xpath";
import "cypress-real-events/support";

Cypress.Commands.add("getDataFromJson", (fileName: string) => {
  return cy.fixture(fileName);
});

Cypress.Commands.add("getDataFromCsv", (fileName: string) => {
  return cy.readFile(`cypress/fixtures/${fileName}`).then((csvString) => {
    return parse(csvString, { columns: true });
  });
});

Cypress.Commands.add("getDataFromExcel", (fileName: string) => {
  return cy
    .readFile(`cypress/fixtures/${fileName}`, "binary")
    .then((content) => {
      const workbook = XLSX.read(content, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      return XLSX.utils.sheet_to_json(sheet);
    });
});

declare global {
  namespace Cypress {
    interface Chainable {
      getDataFromJson(fileName: string): Chainable<any>;
      getDataFromCsv(fileName: string): Chainable<any>;
      getDataFromExcel(fileName: string): Chainable<any>;
    }
  }
}
