import loginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-1: Test Login form with empty credentials
 */
describe('UC-1: Test Login form with empty credentials', () => {
    it('Should validate that the username is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-1'];

        // When the user enters credentials and clears the inputs
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);
        await loginPage.clearInput('username');
        await loginPage.clearInput('password');

        // And submits the login form
        await loginPage.submitLogin();

        // Then the system should display an error message indicating that the username is required
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});
