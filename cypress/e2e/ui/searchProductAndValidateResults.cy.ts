import { setupUserRegistration } from "cypress/support/testSetup";
import { MyAccountPage } from "@support/pages/MyAccountPage";
import { SearchResultsPage } from "@pages/SearchResultsPage";

setupUserRegistration();

describe("Search products and validate results", () => {
  it("should login, search products and validate search results", () => {
    cy.getDataFromJson("testData.json").then((data) => {
      const myAccountPage = new MyAccountPage();
      const searchCriteria = data.searchTerms[0];
      myAccountPage.header.fillSearchCriteria(searchCriteria);

      const searchResultsPage = new SearchResultsPage();
      searchResultsPage.getAllItemsText().then((items) => {
        items.forEach((item) => {
          expect(item.toLowerCase()).to.include(searchCriteria.toLowerCase());
        });
      });
    });
  });
});
