import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import WomenPage from "../../page_objects/womenPage.js";
import { BASE_URL, BOTTOMS_WOMEN_PAGE_END_POINT, TEES_WOMEN_PAGE_END_POINT, TOPS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER, WOMEN_TOPS_HEADER } from "../../helpers/testData.js";
import TopsWomenPage from "../../page_objects/topsWomenPage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";

let homePage, womenPage, topsWomenPage, bottomsWomenPage

test.describe('womenPage.spec', () => {

  test.beforeEach(async({page}) => {
    homePage = new HomePage(page);
    womenPage = new WomenPage(page);
    topsWomenPage = new TopsWomenPage(page)
    bottomsWomenPage = new BottomsWomenPage(page)
    await homePage.open();
  })

  test("Navigate to Women's Tees page by clicking Promo link on 'Women' page", async ({ page }) => {
    await homePage.clickWomenLink();
    await womenPage.clickWomenTeesLink();

    await expect(page).toHaveURL(BASE_URL + TEES_WOMEN_PAGE_END_POINT);
  });

  test('Links with category names are located on the page, clickable, and blue', async ({ page }) => {
    await homePage.clickWomenLink();
    await expect(womenPage.locators.getWomenTopsLink()).toHaveCSS('color', 'rgb(0, 107, 180)')
    
    await womenPage.clickWomenTopsLink()
    await expect(page).toHaveURL(BASE_URL + TOPS_WOMEN_PAGE_END_POINT)
    await expect(topsWomenPage.locators.getWomenTopsPageHeader()).toHaveText(WOMEN_TOPS_HEADER);
    

    await homePage.clickWomenLink();
    await expect(womenPage.locators.getWomenBottomsLink()).toHaveCSS('color', 'rgb(0, 107, 180)')

    await womenPage.clickWomenBottomsLink()
    await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT)
    await expect(bottomsWomenPage.locators.getWomenBottomsPageHeader()).toHaveText(WOMEN_BOTTOMS_HEADER);
    })
});