class HeroHoodiePage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getCurrentPageHeader: () => this.page.getByRole('heading', {name: 'Hero Hoodie'}),
    }
}

export default HeroHoodiePage