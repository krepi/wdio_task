import LoginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-1: Test Login form with empty credentials
 */
describe('UC-1: Test Login form with empty credentials', () => {
    beforeEach(async () => {
        await LoginPage.open(DataProvider.urls.loginPage);
    });

    it('Should validate that the username is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-1'];

        await LoginPage.enterUsername(username);
        await LoginPage.enterPassword(password);
        await LoginPage.clearInputsTyping();
        await LoginPage.submitLogin();

        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});
