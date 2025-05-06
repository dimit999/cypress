import { Label } from '../../ui/baseElements/Label';
import { Button } from '../../ui/baseElements/Button';
import { NavigationPanel } from '@support/forms/NavigationPanel';
import { BasePage } from '../../ui/basePage/BasePage';
import {Input} from "@support/ui/baseElements/Input";

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