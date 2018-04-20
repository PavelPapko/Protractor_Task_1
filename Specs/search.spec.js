describe('search module tests', function () {

    beforeEach(function () {
        browser.get('https://angular.io/docs');
        console.log("\n!!!Тест запущен!!!")
    });

    afterEach(function () {
        console.log("!!!Тест завершён!!!")
    });

    var docs_page = require('../Pages/search_page');

    // Проверка поля ввода, ввод валидного значения и отображение результатов поиска в консоль
    it('input valid data in search field ', function () {
        docs_page.checkSearchField('get');
    });
});
