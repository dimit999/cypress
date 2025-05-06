import { Label } from "@support/framework/baseElements/Label";

export class NavigationPanel {
  // Selectors for navigation tabs
  private womenTab = new Label(
    "//a[contains(@role, 'menuitem')]//span[contains(text(), 'Women')]",
    true,
  );
  private womenTopsTab = new Label(
    "//ul[contains(@style, 'block')]//span[contains(text(), 'Tops')]",
    true,
  );
  private gearTab = new Label(
    "//a[contains(@role, 'menuitem')]//span[contains(text(), 'Gear')]",
    true,
  );
  private gearBagsTab = new Label(
    "//ul[contains(@class, 'submenu')]//span[contains(text(), 'Bags')]",
    true,
  );

  clickWomen() {
    this.womenTab.click();
  }

  clickWomenTops() {
    this.womenTab.hover();
    this.womenTopsTab.click();
  }

  clickGearBags() {
    this.gearTab.hover();
    this.gearBagsTab.click();
  }
}
