import { setupUserRegistration } from 'cypress/support/testSetup';
import { MyAccountPage } from '@support/pages/MyAccountPage';
import {ProductItemsSteps} from "@support/steps/ProductItemsSteps";
import {WomenTopsPage} from "@pages/navigationPages/WomenTopsPage";

const { getUser } = setupUserRegistration();

describe('Place order with multiple products', () => {
  it('should login and place an order with multiple products', () => {
      const myAccountPage = new MyAccountPage();
      myAccountPage.getNavigationPanel().clickWomenTops()

      const productItemsSteps = new ProductItemsSteps();
      const numberOfItems = 2
      const productsPrice = productItemsSteps.addProductsToCart(numberOfItems, true, true, true);

      const womenTopsPage = new WomenTopsPage()
      // womenTopsPage.getHeaderForm().getBasketQtyItems().then((qty) => {
      //     expect(qty).to.equal(2, "Not 2 products added to basket");
      // });
      womenTopsPage.getHeaderForm().clickBasketButton()
      cy.pause()
      womenTopsPage.getBasketForm().getTotalBasketItemsQty().then((qty) => {
          expect(qty).to.equal(2, "Not 2 products added to basket");
      });
      womenTopsPage.getBasketForm().getTotalBasketAmount().then((basketProductsPrice) => {
          expect(basketProductsPrice).to.equal(productsPrice, "Not correct basket Total Amount");
      });
      womenTopsPage.getBasketForm().clickCheckoutButton()

  });
});
