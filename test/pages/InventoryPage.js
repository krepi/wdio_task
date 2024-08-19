import Header from '../components/Header.js';

/**
 * InventoryPage represents the inventory page after login.
 */
class InventoryPage {
    /**
     * Get the header component.
     * @returns {Header} The header component.
     */
    get header() {
        return Header;
    }

    /**
     * Check if the inventory page is displayed by verifying the logo is visible.
     * @returns {Promise<boolean>} True if the logo is displayed, false otherwise.
     */
    async isPageDisplayed() {
        return await this.header.logo.isDisplayed();
    }
}

export default new InventoryPage();
