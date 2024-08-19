import LoginPage from '../../pages/LoginPage.js';
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-2: Test Login form with credentials by passing Username
 */
describe('UC-2: Test Login form with credentials by passing Username', () => {
    beforeEach(async () => {
        await LoginPage.open(DataProvider.urls.loginPage);
    });

    it('Should validate that the password is required', async () => {
        const { username, password, expectedError } = DataProvider.loginData['UC-2'];

        await LoginPage.fullLogin(username, password);
        await LoginPage.submitLogin();

        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toBe(expectedError);
    });
});
