exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    specs: ['./Specs/**/*.spec.js'],

    capabilities: {
        browserName: 'chrome'}
};