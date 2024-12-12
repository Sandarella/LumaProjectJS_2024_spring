import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import JacketsWomenPage from "../../page_objects/jacketsWomenPage";
import { MessageComparisonList } from "../../helpers/testData";

let homePage, jacketsWomenPage

test.describe('jacketsWomen.spec', () => {
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        jacketsWomenPage = new JacketsWomenPage(page);
    
        await homePage.open();
        await homePage.hoverWomenLink();
        await homePage.hoverWomenTopsLink();
        await homePage.clickWomenJacketsLink();
      });

    test('_Verify message add to comparison list', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await jacketsWomenPage.hoverFirstJacketItem()
        await expect(jacketsWomenPage.locators.getAddToCompareButtonFirstItem()).toBeVisible();

        await jacketsWomenPage.clickAddToCompareButtonFirstItem()
        const actualResult = await jacketsWomenPage.locators.getMessageAddedProductComparisonList().textContent();
        expect (actualResult).toContain(MessageComparisonList);
    });
})