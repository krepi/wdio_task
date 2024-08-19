import osType from '../../config/osType.js';
class LoginForm {
    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    get passwordInput() {
        return $('//input[@id="password"]');
    }

    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    get errorMessage() {
        return $(`//div[contains(@class, 'error-message-container')]`);
    }

    async fillUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async fillPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clearInputs() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }
    async clearInputsTyping() {
        await this.usernameInput.click();
        await browser.keys(osType.selectAllShortcut);
        await browser.keys('Backspace');

        await this.passwordInput.click();
        await browser.keys(osType.selectAllShortcut);
        await browser.keys('Backspace');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        const errorMessageElement = await this.errorMessage;
        return await errorMessageElement.getText();
    }
}

export default new LoginForm();
