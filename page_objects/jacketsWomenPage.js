import { WOMEN_JACKETS_NAME } from "../helpers/testData";
import InezFullZipJacketPage from "./inezFullZipJacketPage";

class JacketsWomenPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getWomenJacketsName: () => this.page.getByRole('link', { name: `${WOMEN_JACKETS_NAME}` }).first(),
        getOlivia14ZipLightJacket: () => this.page.getByRole('link', { name: 'Olivia 1/4 Zip Light Jacket' }).first(),
        getMessageAddedProductComparisonList: () => this.page.locator('div.messages a').first(),
        getListJacketItems: () => this.page.locator('.product-image-wrapper'),
        getAddToCompareButtonFirstItem : () => this.page.locator('.action.tocompare').first(),
    }

    async clickWomenJacketsName() {
        await this.locators.getWomenJacketsName().click();
        return new InezFullZipJacketPage(this.page);
    }

    async hoverFirstJacketItem() {
        await this.locators.getListJacketItems().first().hover()
        return this
    }

    async clickAddToCompareButtonFirstItem() {
        await this.locators.getAddToCompareButtonFirstItem().click({force: true})
        return this; 
    }
}

export default JacketsWomenPage;