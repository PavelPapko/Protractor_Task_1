describe('navigation drawer tests', function () {

    beforeEach(function () {
        browser.get('https://angular.io/docs');
        console.log("\n!!!Тест запущен!!!")
    });

    afterEach(function () {
        console.log("!!!Тест завершён!!!")
    });

    var docs_page = require('../Pages/navDrawer_page');

    // Переход на страницу Getting Started и проверка отображения контейнера
    it('open Getting Started page and check container', function () {
        docs_page.checkGettingStarted();
    });

    // Открыть и закрыть Tutorial dropdown
    it('Tutorial Open&Close', function () {
        docs_page.checkTutorialOpenClose();
    });

    // Открыть Tutorial dropdown, проверить отображение списка этементов, вывод в консоль списка элементов,
    // проверка отображениея этементов по отдельности и вывод результата проверки в консоль
    it('Tutorial Open and check elements', function () {
        docs_page.checkTutorialOpen();
    });

    // Закрыть Navigation Drawer когда Tutorial dropdown открыт
    it('Navigation Drawer Close When Tutorial Open', function () {
        docs_page.navigationDrawerCloseWhenTutorialOpen();
    });

    // Проверка Introduction Page и отображение заголовка на данной странице
    it('open Introduction Page and check ', function () {
        docs_page.checkIntroductionPage();
    });

    // Проверка заголовка на странице Services
    it('check header text on Services page', function () {
        docs_page.checkHeaderInServicesTab('Services');
    });

    // Проверка заголовка второго уровня в Techniques dropdown на странице
    it('check header text on Language service page', function () {
        var checkHeader = docs_page.checkLanguageServiceTab();
        expect(checkHeader).toBe('Autocompletion');
    });

});
