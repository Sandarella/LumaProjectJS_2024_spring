import {test, expect} from '@playwright/test';
import HomePage from "../../page_objects/homePage";
import Footer from "../../page_objects/footer";
import PrivacyPolicyPage from "../../page_objects/privacyPolicyPage";
import { NAV_MENU_ITEM_NAMES, NUMBER_NAV_MENU_ITEMS } from "../../helpers/testPrivacyPolicyData";

let homePage, footer, privacyPolicyPage

test.describe('privacyPolicyPage.spec', () => {

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        footer = new Footer(page);
        privacyPolicyPage = new PrivacyPolicyPage(page);

        await homePage.open();
        await footer.clickPrivacyAndCookiePolicyLink();
    })

    test('Verify the navigation menu has 14 items, and they have correct names', async ({ page }) => {
        await expect(privacyPolicyPage.locators.getNavMenuItemList()).toHaveCount(NUMBER_NAV_MENU_ITEMS);
        await expect(privacyPolicyPage.locators.getNavMenuItemList()).toHaveText(NAV_MENU_ITEM_NAMES);    
    });

    NAV_MENU_ITEM_NAMES.forEach((item, idx) => {
        test(`Verify ${item} header on the right side of the page matches navigation menu item`, async ({ page }) => {
            const header = await privacyPolicyPage.locators.getContentHeadersList().nth(idx).innerText();
    
            expect(header).toEqual(NAV_MENU_ITEM_NAMES[idx]);
        })
    });
    
});