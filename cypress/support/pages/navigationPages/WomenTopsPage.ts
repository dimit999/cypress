import { Label } from '../../ui/baseElements/Label';
import { Button } from '../../ui/baseElements/Button';
import { NavigationPanel } from '@support/forms/NavigationPanel';
import { BasePage } from '../../ui/basePage/BasePage';
import {Input} from "@support/ui/baseElements/Input";

export class WomenTopsPage extends BasePage {
    // Element selectors (for reuse)
    private uniquePageSelector = "//span[contains(text(), 'Tops')]";

    getAddToCartButton(index: number) {
        return new Button(`(//li[contains(@class, \'product-item\')]//button[contains(@type, \'submit\')])[${index}]`, true);
    }

    clickSpecialItemAddToCartButtonWithHover(index: number) {
        new Label(`(//div[contains(@class, 'product-item-info')])[${index}]`, true).hover();
        this.getAddToCartButton(index).click()
    }

    clickSpecialItemAddToCartButtonWithoutHover(index: number) {
        this.getAddToCartButton(index).click()
    }

    protected getUniqueElementSelector(): string {
        return this.uniquePageSelector;
    }


    protected getUniqueElementIsXpath(): boolean {
        return true;
    }
}