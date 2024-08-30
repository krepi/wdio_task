import LoginForm from '../components/LoginForm.js';

/**
 * LoginPage represents the login page.
 */
class LoginPage {

    /**
     * Clear the specified input field.
     * @param {string} inputType - The type of input to clear ("username" or "password").
     */
    async clearInput(inputType) {
        if (inputType === 'username') {
            await LoginForm.clearInput(LoginForm.usernameInput);
        } else if (inputType === 'password') {
            await LoginForm.clearInput(LoginForm.passwordInput);
        }
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
