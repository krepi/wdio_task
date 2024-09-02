import osType from '../../config/osType.js';

/**
 * LoginForm component handling interactions with the login form.
 */
class LoginForm {
    /**
     * Get the username input element.
     * @returns {WebdriverIO.Element} The username input element.
     */
    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    /**
     * Get the password input element.
     * @returns {WebdriverIO.Element} The password input element.
     */
    get passwordInput() {
        return $('//input[@id="password"]');
    }

    /**
     * Get the login button element.
     * @returns {WebdriverIO.Element} The login button element.
     */
    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    /**
     * Get the error message element.
     * @returns {WebdriverIO.Element} The error message element.
     */
    get errorMessage() {
        return $(`//div[contains(@class, 'error-message-container')]`);
    }

    /**
     * Fill an input field with the specified value.
     * @param {WebdriverIO.Element} inputElement - The input element to fill.
     * @param {string} value - The value to set.
     */
    async fillInput(inputElement, value) {
        await inputElement.setValue(value);
    }

    /**
     * Clear an input field using keyboard shortcuts (for different OS).
     * @param {WebdriverIO.Element} inputElement - The input element to clear.
     */
    async clearInput(inputElement) {
        await inputElement.click();
        await browser.keys(osType.selectAllShortcut);
        await browser.keys('Backspace');
    }

    /**
     * Fill the username input.
     * @param {string} username - The username to enter.
     */
    async fillUsername(username) {
        await this.fillInput(this.usernameInput, username);
    }

    /**
     * Fill the password input.
     * @param {string} password - The password to enter.
     */
    async fillPassword(password) {
        await this.fillInput(this.passwordInput, password);
    }

    /**
     * Click the login button.
     */
    async clickLogin() {
        await this.loginButton.click();
    }

    /**
     * Get the text of the error message.
     * @returns {Promise<string>} The error message text.
     */
    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

export default new LoginForm();
