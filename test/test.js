var webdriver = require('selenium-webdriver');
var chai = require('chai');
chai.should();

var driver=new webdriver.Builder().withCapabilities(webdriver.Capabilities.phantomjs()).build();

describe('test title', function() {
  it('should return correct title', function(done) {
    driver.get('https://www.google.com')
    .then(() => driver.getTitle())
    .then(title => title.should.equal('Google'))
    .then(() => done())
    .catch(error => done(error));
  });
});

after(function(done) {
       driver.quit();
       done();
});



