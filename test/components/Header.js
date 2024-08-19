/**
 * Header component representing the header section of the page.
 */
class Header {
    /**
     * Get the logo element.
     * @returns {WebdriverIO.Element} The logo element.
     */
    get logo() {
        return $(`//div[contains(@class, 'app_logo')]`);
    }

    /**
     * Get the text of the logo.
     * @returns {Promise<string>} The text of the logo.
     */
    async getLogoText() {
        return await this.logo.getText();
    }
}

export default new Header();
