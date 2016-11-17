var homePage = require('../pages/homePage.js');
var counterPage = require('../pages/counterPage.js');

describe('Welcome Page', function() {
    'use strict';

    it('When: User accesses the web app, he should land on the home page', function () {
        homePage.validateHomePage();
    });

    it('Then: User wants to navigate to the counter page', function () {
        homePage.goToCounterPage();
    });

    it('Then: User should have landed successfully on the counter page', function () {
        counterPage.validateCounterPage();
    });

    it('When: User clicks on increment button', function () {
        counterPage.incrementValue();
    });

});
