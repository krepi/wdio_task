import LoginForm from '../components/LoginForm.js';

/**
 * LoginPage represents the login page.
 */
class LoginPage {
    /**
     * Open the login page with the given URL.
     * @param {string} url - The URL of the login page.
     */
    async open(url) {
        await browser.url(url);
    }

    /**
     * Perform a full login with username and password.
     * @param {string} username - The username to enter.
     * @param {string} password - The password to enter.
     */
    async fullLogin(username, password) {
        await LoginForm.fillUsername(username);
        await LoginForm.fillPassword(password);
        await LoginForm.clickLogin();
    }

    /**
     * Enter the username.
     * @param {string} username - The username to enter.
     */
    async enterUsername(username) {
        await LoginForm.fillUsername(username);
    }

    /**
     * Enter the password.
     * @param {string} password - The password to enter.
     */
    async enterPassword(password) {
        await LoginForm.fillPassword(password);
    }

    /**
     * Clear the login form inputs.
     */
    async clearLoginForm() {
        await LoginForm.clearInputs();
    }

    /**
     * Clear the login form inputs using keyboard shortcuts.
     */
    async clearInputsTyping() {
        await LoginForm.clearInputsTyping();
    }

    /**
     * Get the error message text.
     * @returns {Promise<string>} The error message text.
     */
    async getErrorMessage() {
        return await LoginForm.getErrorMessage();
    }

    /**
     * Submit the login form by clicking the login button.
     */
    async submitLogin() {
        await LoginForm.clickLogin();
    }
}

export default new LoginPage();
