import LoginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-2: Test Login form with credentials by passing Username
 */
describe('UC-2: Test Login form with credentials by passing Username', () => {
    it('Should validate that the password is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-2'];

        // When the user enters a username but leaves the password empty
        await LoginPage.enterUsername(username);
        await LoginPage.enterPassword(password);

        // Then the system should display an error message indicating that the password is required
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});

