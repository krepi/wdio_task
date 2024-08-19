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
     * Fill the username input.
     * @param {string} username - The username to enter.
     */
    async fillUsername(username) {
        await this.usernameInput.setValue(username);
    }

    /**
     * Fill the password input.
     * @param {string} password - The password to enter.
     */
    async fillPassword(password) {
        await this.passwordInput.setValue(password);
    }

    /**
     * Clear both username and password inputs.
     */
    async clearInputs() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }

    /**
     * Clear inputs using keyboard shortcuts (for different OS).
     */
    async clearInputsTyping() {
        await this.usernameInput.click();
        await browser.keys(osType.selectAllShortcut);
        await browser.keys('Backspace');

        await this.passwordInput.click();
        await browser.keys(osType.selectAllShortcut);
        await browser.keys('Backspace');
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
        const errorMessageElement = await this.errorMessage;
        return await errorMessageElement.getText();
    }
}

export default new LoginForm();
