var search_page =  function () {

    var searchField = element(by.css('[type="search"]'));
    var searchResultArea = element(by.css('[class="search-area ng-star-inserted"]'));
    var searchResult = element(by.css('[class="search-results"]', '[class="search-area ng-star-inserted"]'));
    var EC = protractor.ExpectedConditions;
    var isDisplay = EC.visibilityOf(searchResultArea);

    this.checkSearchField = function (value) {
        searchField.click();
        searchField.sendKeys(value);
        browser.wait(isDisplay, 5000, 'Превышено время ожидания!');
        searchResult.getText().then(function (value2) {
            console.log(value2);
        });
        searchField.clear();
    };

};
module.exports = new search_page();