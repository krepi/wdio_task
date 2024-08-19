import LoginForm from '../components/LoginForm.js';

class LoginPage {
    async open(url) {
        await browser.url(url);
    }

    async fullLogin(username, password) {
        await LoginForm.fillUsername(username);
        await LoginForm.fillPassword(password);
        await LoginForm.clickLogin();
    }

    async enterUsername(username) {
        await LoginForm.fillUsername(username);
    }

    async enterPassword(password) {
        await LoginForm.fillPassword(password);
    }

    async clearLoginForm() {
        await LoginForm.clearInputs();
    }

    async clearInputsTyping() {
        await LoginForm.clearInputsTyping();
    }

    async getErrorMessage() {
        return await LoginForm.getErrorMessage();
    }

    async submitLogin() {
        await LoginForm.clickLogin();
    }
}

export default new LoginPage();
