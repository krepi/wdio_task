import LoginPage from '../../pages/LoginPage.js';
import InventoryPage from "../../pages/InventoryPage.js";
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-3: Test Login form with valid credentials
 */
describe('UC-3: Test Login form with valid credentials', () => {
    it('Should log in successfully with valid credentials', async () => {
        const { username, password } = DataProvider.loginData['UC-3'];

        // Given the user is on the login page

        // When the user logs in with valid credentials
        await LoginPage.enterUsername(username);
        await LoginPage.enterPassword(password);
        await LoginPage.submitLogin();

        // Then the user should be redirected to the inventory page
        expect(await InventoryPage.isPageDisplayed()).toBe(true);

        // And the header title should display "Swag Labs"
        const headerTitle = await InventoryPage.header.getLogoText();
        expect(headerTitle).toBe('Swag Labs');
    });
});
