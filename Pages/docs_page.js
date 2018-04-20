var docs_page =  function () {

    var homeButton = element(by.css('[title="Home"]'));
    var featuresButton = element(by.css('[title="Features"]'));
    var featuresHeader = element(by.css('[class="banner-headline no-toc no-anchor"]'));
    var docsButton = element(by.css('[title="Docs"]'));
    var resourcesButton = element(by.css('[title="Resources"]'));
    var eventsButton = element(by.css('[title="Events"]'));
    var blogButton = element(by.css('[title="Blog"]'));
    var listOfButtons = element.all(by.css('.nav-link'));
    var sizeOfIcon = element(by.css('[src="generated/images/marketing/features/feature-icon.svg"]'));
    var headerDocsPage = element(by.css('.no-toc'));
    var listDocsCard = element.all(by.css('.docs-card'));
    var resourcesContainer = element(by.css('.resources-container'));
    var eventsTable = element(by.css('.is-full-width'));

    this.checkHomePage = function () {
        homeButton.click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/');
    };

    this.checkFeaturesPage = function () {
        featuresButton.click();
        featuresHeader.isDisplayed();

        sizeOfIcon.getSize().then(function(size) {
            var width = size.width;
            var height = size.height;
            console.log('h='+width+'px', 'w='+height+'px');
        });
    };

    this.checkDocsPage = function () {
        docsButton.click();
        headerDocsPage.isDisplayed();
        expect(listDocsCard.count()).toBe(3);
        expect(listDocsCard.get(0).getText()).not.toEqual(2);
        expect(listDocsCard.get(1).getText()).not.toEqual(1);
        expect(listDocsCard.get(2).getText()).not.toEqual(0);
        return headerDocsPage.getText();
    };

    this.checkResourcesPage = function () {
        resourcesButton.click();
        resourcesContainer.isDisplayed();
    };

    this.checkEventsPage = function () {
        eventsButton.click();
        eventsTable.getText().then(function (value) {
            console.log(value);
        });
    };

    this.checkBlogPage = function () {
        blogButton.click();
    };

    this.checkCountDocsButtons = function () {
        expect(listOfButtons.count()).toBe(6);
    };

    this.checkDocsButtons = function () {
        expect(listOfButtons.get(0).getText()).not.toBe(null);
        expect(listOfButtons.get(1).getText()).toBe('FEATURES');
        expect(listOfButtons.get(2).getText()).toBe('DOCS');
        expect(listOfButtons.get(3).getText()).toBe('RESOURCES');
        expect(listOfButtons.get(4).getText()).toBe('EVENTS');
        expect(listOfButtons.get(5).getText()).toBe('BLOG');
        listOfButtons.getText().then(function (value) {
            console.log(value);
        });
    };

};
module.exports = new docs_page();