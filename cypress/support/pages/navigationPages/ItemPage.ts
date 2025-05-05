import { Label } from '../../ui/baseElements/Label';
import { Button } from '../../ui/baseElements/Button';
import { NavigationPanel } from '@support/forms/NavigationPanel';
import { BasePage } from '../../ui/basePage/BasePage';
import {Input} from "@support/ui/baseElements/Input";

export class ItemPage extends BasePage {
    // Element selectors (for reuse)
    private uniquePageSelector = "//span[contains(@itemprop, 'reviewCount')]";
    private addToCartButton = new Button('//button[contains(@id, \'add\')]');
    private addToWishlistButton = new Button('//div[contains(@class, \'product-social\')]' +
        '//a[contains(@data-action, \'add-to-wishlist\')]');
    private getProductPrice = new Label('//div[contains(@class, \'product-info\')]' +
        '//span[@data-price-type=\'finalPrice\']');

    getProductPriceText() {
        return this.getProductPrice.getAttribute('data-price-amount');
    }
    clickSpecialLabelSizeButton(index: number) {
        new Button(`(//div[contains(@id, 'label-size')])[${index}]`).click();
    }

    clickSpecialLabelColorButton(index: number) {
        new Button(`(//div[contains(@id, 'label-color')])[${index}]`).click();
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    clickAddToWishlistButton() {
        this.addToWishlistButton.click();
    }


    protected getUniqueElementSelector(): string {
        return this.uniquePageSelector;
    }


    protected getUniqueElementIsXpath(): boolean {
        return true;
    }
}