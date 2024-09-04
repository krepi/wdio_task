import loginPage from '../../pages/LoginPage.js';
import inventoryPage from "../../pages/InventoryPage.js";
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-3: Test Login form with valid credentials
 */
describe('UC-3: Test Login form with valid credentials', () => {
    it('Should log in successfully with valid credentials', async () => {
        const { username, password } = DataProvider.loginData['UC-3'];

        // Given the user is on the login page

        // When the user logs in with valid credentials
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);
        await loginPage.submitLogin();

        // Then the user should be redirected to the inventory page
        expect(await inventoryPage.isPageDisplayed()).toBe(true);

        // And the header title should display "Swag Labs"
        const headerTitle = await inventoryPage.header.getLogoText();
        expect(headerTitle).toBe('Swag Labs');
    });
});
