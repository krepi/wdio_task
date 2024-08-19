import LoginPage from '../../pages/LoginPage.js';
import InventoryPage from "../../pages/InventoryPage.js";
import DataProvider from "../../../utils/dataProvider.js";

/**
 * UC-3: Test Login form with valid credentials
 */
describe('UC-3: Test Login form with valid credentials', () => {
    beforeEach(async () => {
        await LoginPage.open(DataProvider.urls.loginPage);
    });

    it('Should log in successfully with valid credentials', async () => {
        const { username, password } = DataProvider.loginData['UC-3'];
        await LoginPage.fullLogin(username, password);

        expect(await InventoryPage.isPageDisplayed()).toBe(true);
        const headerTitle = await InventoryPage.header.getLogoText();
        expect(headerTitle).toBe('Swag Labs');
    });
});
