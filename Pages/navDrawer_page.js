var navDrawer_page =  function () {

    var docsMenuButton = element(by.css('[title="Docs menu"]'));
    var gettingStarted = element(by.css('[title="A gentle introduction to Angular."]'));
    var tutorialDropdown = element(by.css('[title^="The Tour"]'));
    var tutorialDropdownClose = element(by.css('[class="vertical-menu-item heading ng-star-inserted level-1 collapsed"]'));
    var tutorialDropdownList = element(by.css('[class="heading-children level-1 expanded"]'));
    var tutorialDropdownElementsText = element(by.css('[class="heading-children level-1 expanded"]', 'title^="Part "'));
    var tutorialPart1 = element(by.css('[title^="Part 1:"]'));
    var tutorialPart6 = element(by.css('[title^="Part 6:"]'));
    var tutorialIntroductionHeader = element(by.css('div', 'class="content"'));
    var servicesHeader = element(by.css('h1', '[id="services"]'));
    var techniquesDropdown = element(by.css('[title^="Techniques for putting "]'));
    var languageServiceTab = element(by.css('[title^="Use Angular "]'));
    var languageServiceTabh2 = element(by.css('[id="autocompletion"]'));
    var gettingStartedContainer = element(by.css('[class="toc-container no-print ng-star-inserted"]'));

    this.checkGettingStarted = function () {
        browser.get('https://angular.io/docs');
        gettingStarted.click();
        gettingStartedContainer.isDisplayed();
    };

    this.checkTutorialOpenClose = function () {
        tutorialDropdown.click();
        tutorialDropdown.click();
        tutorialDropdownClose.isPresent();
    };

    this.checkTutorialOpen = function () {
        tutorialDropdown.click();
        tutorialDropdownList.isPresent();
        tutorialDropdownElementsText.getText().then(function (value) {
            console.log(value);
        });
        tutorialDropdownElementsText.isDisplayed().then(function (value) {
            console.log(value);
        });
    };

    this.navigationDrawerCloseWhenTutorialOpen = function () {
        tutorialDropdown.click();
        docsMenuButton.click();
        docsMenuButton.click();
        tutorialDropdownElementsText.isDisplayed();
    };

    this.checkIntroductionPage = function () {
        tutorialDropdown.click();
        tutorialPart1.click();
        tutorialIntroductionHeader.isDisplayed();
    };

    this.checkHeaderInServicesTab = function (value) {
        tutorialDropdown.click();
        tutorialPart6.click();
        expect(servicesHeader.getText()).toBe(value);
    };

    this.checkLanguageServiceTab = function () {
        techniquesDropdown.click();
        languageServiceTab.click();
        return languageServiceTabh2.getText();
    };

};
module.exports = new navDrawer_page();