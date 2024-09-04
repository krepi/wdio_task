import loginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-2: Test Login form with credentials by passing Username
 */
describe('UC-2: Test Login form with credentials by passing Username', () => {
    it('Should validate that the password is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-2'];

        // Given the user is on the login page

        // When the user enters a username
        await loginPage.enterUsername(username);

        // And clears the password input
        await loginPage.enterPassword(password);
        await loginPage.clearInput('password');

        // And submits the login form
        await loginPage.submitLogin();

        // Then the system should display an error message indicating that the password is required
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});

