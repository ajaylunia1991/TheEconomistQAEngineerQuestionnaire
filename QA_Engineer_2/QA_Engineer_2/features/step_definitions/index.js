const { Given, Then, When, And } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert').strict;

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})


Then(/^I should see the search fields$/, async () => {
  return assert.ok(World.driver.findElement(By.xpath('//input[@id="keywords"]')).isDisplayed() && World.driver.findElement(By.xpath('//input[@id="location"]')).isDisplayed());
})



Then(/^I should see sector lists$/, async () => {

let jobs = await World.driver.findElements(By.xpath('//div[@class="browse__items"]//a'));
console.log(typeof jobs);
console.log(Object.keys(jobs).length);

console.log('---------------------------------jobs----------------------------------------');
for(let job of jobs)
{
  text = await job.getText();
  console.log(text);
  }

return assert.ok(Object.keys(jobs).length > 1);
})


Then(/^I should see jobs blog$/, async () => {

let jobBlogs = await World.driver.findElements(By.xpath('//h2[./span[contains(text(),"Jobs blog")]]/following-sibling::div//a'));

console.log('---------------------------------Job Blogs----------------------------------------');

for(let jobBlog of jobBlogs)
{
  text = await jobBlog.getText();
  console.log(text);
  }

  return assert.ok(World.driver.findElement(By.xpath('//h2[@class="brick__header"]/span[contains(text(),"Jobs blog")]')).isDisplayed() && Object.keys(jobBlogs).length > 1);
})

Then(/^I should see featured jobs$/, async () => {

let featuredJobs = await World.driver.findElements(By.xpath('//h2[./span[contains(text(),"Featured jobs")]]/following-sibling::ul//a'));

console.log('---------------------------------Featured Jobs----------------------------------------');

for(let featuredJob of featuredJobs)
{
  text = await featuredJob.getText();
  console.log(text);
  }

  return assert.ok(World.driver.findElement(By.xpath('//h2[@class="brick__header"]/span[contains(text(),"Featured jobs")]')).isDisplayed() && Object.keys(featuredJobs).length > 1);
})


Then(/^I should see footer$/, async () => {


let footerLinks = await World.driver.findElements(By.xpath('//li[@class="tertiary-nav__item"]/a'));

console.log('---------------------------------Footer Links----------------------------------------');

for(let footerLink of footerLinks)
{
  text = await footerLink.getText();
  console.log(text);
  }


return assert.ok(World.driver.findElement(By.xpath('//footer[@role="contentinfo"]')).isDisplayed() && Object.keys(footerLinks).length == 5);

})

When(/^I click Sign In$/, async () => {

return await World.driver.findElement(By.xpath('//a[contains(@href,"/logon")]')).click();

})


Then(/^I should be landed on Sign In Page$/, async () => {

let currentUrl = await World.driver.getCurrentUrl();
console.log(currentUrl);

return assert.ok(currentUrl.includes('logon'));

})

When(/^I click Create Account$/, async () => {

return await World.driver.findElement(By.xpath('//a[contains(@href,"/register")]')).click();

})


Then(/^I should be landed on Create Account Page$/, async () => {

let currentUrl = await World.driver.getCurrentUrl();
console.log(currentUrl);

return assert.ok(currentUrl.includes('register'));

})

