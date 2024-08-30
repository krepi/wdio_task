import LoginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-1: Test Login form with empty credentials
 */
describe('UC-1: Test Login form with empty credentials', () => {
        // Given the user is on the login page
    it('Should validate that the username is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-1'];

        // When the user enters credentials and clears the inputs
        await LoginPage.enterUsername(username);
        await LoginPage.enterPassword(password);
        await LoginPage.clearInputsTyping();

        // And submits the login form
        await LoginPage.submitLogin();

        // Then the system should display an error message indicating that the username is required
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});
