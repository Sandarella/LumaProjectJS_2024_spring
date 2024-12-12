import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import WhatsNewPage from '../../page_objects/whatsNewPage.js';
import { BASE_URL,WHATS_NEW_PAGE_END_POINT, WHATS_NEW_PAGE_HEADER } from '../../helpers/testData.js';

let homePage, whatsNewPage

test.describe('whatIsNewPage.spec', () => {
  test.beforeEach(async({page}) => {
    homePage = new HomePage(page);
    whatsNewPage = new WhatsNewPage(page);
    await homePage.open();
    await homePage.clickWhatsNewLink();
  })

  test('Redirect to "Whats New" page', async({page}) => {
    await expect(page).toHaveURL(BASE_URL + WHATS_NEW_PAGE_END_POINT);
    await expect(whatsNewPage.locators.getPageHeader()).toHaveText(WHATS_NEW_PAGE_HEADER);
  });  
  
  test("TC 04.1.3_01 Verify the “NEW IN MEN'S section is displayed on the What's New page", async ({page}) => {
    await expect(whatsNewPage.locators.getMenuNewInMens()).toBeVisible();
  });
  
  test("TC 04.1.3_02 Verify links are displayed in New In Mens", async ({page}) => {
    let itemsArr = [
      whatsNewPage.locators.getNewInMensHoodies(),
      whatsNewPage.locators.getNewInMensJackets(),
      whatsNewPage.locators.getNewInMensPants(),
      whatsNewPage.locators.getNewInMensShorts(),
      whatsNewPage.locators.getNewInMensTanks(),
      whatsNewPage.locators.getNewInMensTees(),
    ];
    for(let i = 0; i < itemsArr.length; i++) {
      await expect(itemsArr[i]).toBeVisible();
    }
  });
})
