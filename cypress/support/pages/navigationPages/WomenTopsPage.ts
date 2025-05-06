import { Label } from '@support/framework/baseElements/Label';
import { Button } from '@support/framework/baseElements/Button';
import { NavigationPanel } from '../../forms/NavigationPanel';
import { BasePage } from '@support/framework/basePage/BasePage';
import {Input} from "@support/framework/baseElements/Input";

export class WomenTopsPage extends BasePage {
    // Element selectors (for reuse)
    private uniquePageSelector = "//span[contains(text(), 'Tops')]";

    getSpecificCardItemImage(index: number) {
        return new Label(`(//div[contains(@class, 'product-item-info')]//span[contains(@class, 'product-image-wrapper')])[${index}]`, true);
    }

    clickSpecialItemAddToCartButtonWithHover(index: number) {
        new Label(`(//div[contains(@class, 'product-item-info')])[${index}]`, true).hover();
        this.getSpecificCardItemImage(index).click();
    }

    clickSpecialItemAddToCartButtonWithoutHover(index: number) {
        this.getSpecificCardItemImage(index).click()
    }

    protected getUniqueElementSelector(): string {
        return this.uniquePageSelector;
    }


    protected getUniqueElementIsXpath(): boolean {
        return true;
    }
}