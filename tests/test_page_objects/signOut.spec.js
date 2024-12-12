import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/signOut";
import { email, password } from "../../helpers/testData";
import SignInPage from "../../page_objects/signInPage";

let homePage, signInPage

test.describe('signOut.spec', () => {

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    homePage = new HomePage(page);
    await homePage.open();
  })

  test('should be a greeting with the users name ', async ({ page }) => {
    await homePage.clickSignInLink();
    await signInPage.fillFieldEmail();
    await signInPage.fillFieldPassword();
    await signInPage.clickButtonSignIn();
    await page.waitForTimeout(3000);
    const isGreetingVisible = new SignInPage(page);

    expect(isGreetingVisible).toBeTruthy();
  })

  test('drop-down menu should open', async ({ page }) => {
    await homePage.clickSignInLink();
    await signInPage.fillFieldEmail();
    await signInPage.fillFieldPassword();
    await signInPage.clickButtonSignIn();
    await page.waitForTimeout(4000);
    await signInPage.clickDpopdown(); 

    await expect(signInPage.locators.getDropdownWishList()).toBeVisible();
  })

  test('should be the "Log out" link, the user logs out of his account by clicking on it', async ({ page }) => {
    await homePage.clickSignInLink();
    const signInPage = new SignInPage(page);
    await signInPage.fillFieldEmail();
    await signInPage.fillFieldPassword();
    await signInPage.clickButtonSignIn();
    await page.waitForTimeout(4000);
    await signInPage.clickDpopdown();
    await signInPage.clickSignOut();

    expect(signInPage.locators.getMessageSignedOut()).toBeTruthy();
  })
})