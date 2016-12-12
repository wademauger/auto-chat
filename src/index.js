const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.facebook.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();

