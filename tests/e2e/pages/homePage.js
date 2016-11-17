var page = require('./page');

var homePage = Object.create(page, {

  counterButton:      { get: function () { return browser.element('=Counter'); } },

  validateHomePage: {
    value: function () {
      browser.url('/');
      var pageTitle = browser.getTitle();
      expect(pageTitle).toBe('React Redux WebdriverIO Starter Kit');
  }
},

  goToCounterPage: {
    value: function () {
      this.counterButton.click();
  }
}

});

module.exports = homePage;
