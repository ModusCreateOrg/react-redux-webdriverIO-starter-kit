var page = require('./page');

var counterPage = Object.create(page, {

  incrementButton:      { get: function () { return browser.element('button=Increment'); } },
  incrementedValue:     { get: function () { return browser.element('*=Counter'); } },

  validateCounterPage: {
    value: function () {
      var url = browser.getUrl();
      expect(url).toBe("http://localhost:3000/counter");
    }
  },

  incrementValue: {
    value: function () {
      this.incrementButton.click();
      browser.pause(1000);
      this.incrementButton.click();
      browser.pause(1000);
      this.incrementButton.click();
  }
}


});

module.exports = counterPage;
