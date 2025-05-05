import { setupUserRegistration } from 'cypress/support/testSetup';
import { MyAccountPage } from '@pages/MyAccountPage';
import {ProductItemsSteps} from "@support/steps/ProductItemsSteps";

const { getUser } = setupUserRegistration();

describe('Place order with multiple products', () => {
  it('should login and place an order with multiple products', () => {
      const myAccountPage = new MyAccountPage();
      myAccountPage.getNavigationPanel().clickWomenTops()

      const productItemsSteps = new ProductItemsSteps();
      const productsPrice = productItemsSteps.addProductsToCart(2, true, true, true);

  });
});
