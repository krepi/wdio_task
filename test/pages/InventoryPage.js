import Header from '../components/Header.js';

class InventoryPage {
    get header() {
        return Header;
    }

    async isPageDisplayed() {
        return await this.header.logo.isDisplayed();
    }
}

export default new InventoryPage();
