import { Button } from '../baseElements/Button';

export class NavigationPanel {
  // Selectors for navigation tabs
  private womenTab = 'a[role="menuitem"][href*="women"]';
  private menTab = 'a[role="menuitem"][href*="men"]';

  /**
   * Clicks the Women tab in the navigation panel.
   */
  clickWomen() {
    Button.click(this.womenTab);
  }

  /**
   * Clicks the Men tab in the navigation panel.
   */
  clickMen() {
    Button.click(this.menTab);
  }
}
