class BreatheEasyTankPage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getCurrentPageHeader: () => this.page.getByRole('heading', {name: 'Breathe-Easy Tank'}),
        getCurrentPageReviewsTab: () => this.page.locator('#product-review-container')
    }
}

export default BreatheEasyTankPage