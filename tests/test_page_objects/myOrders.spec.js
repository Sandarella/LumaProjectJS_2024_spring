import { expect } from '@playwright/test';
import { test } from "./base.js";
import MyAccountPage from '../../page_objects/myAccountPage.js';
import CheckoutOnepageSuccessPage from '../../page_objects/checkoutOnepageSuccessPage.js';
import { MY_ORDERS_PAGE_END_POINT, MY_ORDERS_HEADER, BASE_URL, } from "../../helpers/testData.js";

let myAccountPage, checkoutOnepageSuccessPage

test.describe('myOrders', () => {
    test.beforeEach('Create account', async ({ page }) => {   
        myAccountPage = new MyAccountPage(page);
        checkoutOnepageSuccessPage = new CheckoutOnepageSuccessPage(page);
    })
    
    test('checkMyOrdersLink', async ({ page, createNewAccount }) => {
        const myOrdersPage = await myAccountPage.clickMyOrdersLink();

        await expect(page).toHaveURL(BASE_URL + MY_ORDERS_PAGE_END_POINT);
        await expect(myOrdersPage.locators.getTitle()).toContainText(MY_ORDERS_HEADER);
    })

    test('OrderHistory', async ({ page, createNewAccount, createNewOrder }) => {
        await checkoutOnepageSuccessPage.waitContinueShoppingButton();
        await checkoutOnepageSuccessPage.clickActionSwitchButton();
        await checkoutOnepageSuccessPage.waitMyAccountLink();
        await checkoutOnepageSuccessPage.clickMyAccountLink();
        const myOrders = await myAccountPage.clickMyOrdersLink();
        await myOrders.waitgetTitle();

        await expect(myOrders.locators.getViewOrdersLink()).toBeVisible();
        await expect(myOrders.locators.getReorderLink()).toBeVisible();
    })
})

