import { Label } from '../ui/baseElements/Label';

export class NavigationPanel {
  // Selectors for navigation tabs
  private womenTab = new Label('//a[contains(@role, \'menuitem\')]//span[contains(text(), \'Women\')]', true);
  private womenTopsTab = new Label('//ul[contains(@style, \'block\')]//span[contains(text(), \'Tops\')]', true);

  /**
   * Clicks the Women tab in the navigation panel.
   */
  clickWomen() {
    this.womenTab.click();
  }

  clickWomenTops() {
    this.womenTab.hover();
    this.womenTopsTab.click();
  }
}
