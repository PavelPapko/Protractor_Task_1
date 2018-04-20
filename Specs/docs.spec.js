describe('docs page tests', function () {

    beforeEach(function () {
        browser.get('https://angular.io/docs');
        console.log("\n!!!Тест запущен!!!")
    });

    afterEach(function () {
        console.log("!!!Тест завершён!!!")
    });

    var docs_page = require('../Pages/docs_page');

    // Проверка перехода на Home page
    it('open Home page', function () {
        docs_page.checkHomePage();
    });

    // Проверка перехода на страницу Features и проверка отображения заголовка, вывод в консоль размера иконки на странице
    it('open Features page and check header', function () {
        docs_page.checkFeaturesPage();
    });

    // Проверка:
    // Docs page,
    // оторажения заголовка и вывод его в сконсоль,
    // количества card элементов и их значений
    it('open Docs page, check header and card elements', function () {
        docs_page.checkDocsPage();
        var checkHeader = docs_page.checkDocsPage();
        expect(checkHeader).toBe('What is Angular?');
    });

    // Проверка перехода на странциу Resources page и проверка отображения контейнера на странице Resources page
    it('open Resources page and check container', function () {
        docs_page.checkResourcesPage();
    });

    // Проверка перехода на Events page и вывод в консоль значений в таблице на странице Events page
    it('open Events page and get text in table', function () {
        docs_page.checkEventsPage();
    });

    // Проверка перезода на странциу Blog page
    it('open Blog page', function () {
        docs_page.checkBlogPage();
    });

    // Проверка количества кнопок в заголовке Docs page
    it('check count of buttons in Docs page header', function () {
        docs_page.checkCountDocsButtons();
    });

    // Проверка кнопок названий кнопок и вывод в консоль список кнопок находящихся в заголовке Docs page
    it('check buttons in header', function () {
        docs_page.checkDocsButtons();
    });

});