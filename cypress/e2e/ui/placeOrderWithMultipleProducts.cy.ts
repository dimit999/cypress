import { setupUserRegistration } from 'cypress/support/testSetup';
import { MyAccountPage } from '@support/pages/MyAccountPage';
import {ProductItemsSteps} from "@support/steps/ProductItemsSteps";
import {WomenTopsPage} from "@pages/navigationPages/WomenTopsPage";

const { getUser } = setupUserRegistration();

describe('Place order with multiple products', () => {
  it('should login and place an order with multiple products', () => {
      const myAccountPage = new MyAccountPage();
      myAccountPage.navigation.clickWomenTops();

      const productItemsSteps = new ProductItemsSteps();
      const numberOfItems = 2;

      productItemsSteps.addProductsToCart(numberOfItems, true, true, true).then((productsPrice) => {
          Cypress.env('productsPrice', productsPrice); // Optional: for debugging in console
          cy.log("Calculated products price:", productsPrice);
          Cypress.env('productsPrice', productsPrice);

          const womenTopsPage = new WomenTopsPage();
          womenTopsPage.header.clickBasketButton();
          womenTopsPage.basket.getTotalBasketItemsQty().then((qty) => {
              expect(qty).to.equal(2, "Not 2 products added to basket");
          });
          cy.log(`Total products price: ${productsPrice}`);
          womenTopsPage.basket.getTotalBasketAmount().then((basketProductsPrice) => {
              cy.log("Basket Products Price:", basketProductsPrice);
              expect(basketProductsPrice).to.equal(productsPrice, "Not correct basket Total Amount");
          });
          womenTopsPage.basket.clickCheckoutButton();




      });


  });
});
