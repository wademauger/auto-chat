const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const config = require('./config');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.messenger.com');
driver.findElement(By.name('email')).sendKeys(config.email);
driver.findElement(By.name('pass')).sendKeys(config.pass);
driver.findElement(By.id('loginbutton')).click();
driver.wait(until.titleIs('Messenger!'), 1000);
driver.quit();

