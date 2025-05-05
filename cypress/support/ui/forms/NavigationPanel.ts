import { Button } from '../baseElements/Button';

export class NavigationPanel {
  // Selectors for navigation tabs
  private womenTab = 'a[role="menuitem"][href*="women"]';
  private womenTopsTab = 'a[role="menuitem"][href*="tops"]';
  private menTab = 'a[role="menuitem"][href*="men"]';

  /**
   * Clicks the Women tab in the navigation panel.
   */
  clickWomen() {
    new Button(this.womenTab).click();
  }

  clickWomenTops() {
    new Button(this.womenTab).hover();
    new Button(this.womenTopsTab).click();
  }

  /**
   * Clicks the Men tab in the navigation panel.
   */
  clickMen() {
    new Button(this.menTab).click();
  }
}
