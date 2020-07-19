const { Given, Then, When, And } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert').strict;
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

Given(/^I go to the jobs.economist.com page$/, () => World.goToJobsPage());

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


//verifying home link in Navigation Bar
When(/^I click on Home Link in Navigation bar$/, async () => {
  console.log('-------------------------------- Links on Navigation Bar----------------------------------------');
  return await World.driver.findElement(By.xpath('//a[contains(text(),"Home")]')).click();
  
  })
  
  
Then(/^I should be landed on Home page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('jobs.economist.com'));
     
  })

//verifying Find a job link in Navigation Bar
When(/^I click on Find a job Link in Navigation bar$/, async () => {
  await snooze(2000);
  return await World.driver.findElement(By.xpath('//a[contains(text(),"Find a job")]')).click();
  
  })
  
  
Then(/^I should be landed on jobs page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('jobs.economist.com/jobs/'));
     
  })

  
//verifying job alerts link in Navigation Bar  
When(/^I click on job alerts link in Navigation bar$/, async () => {
  await snooze(2000);
  return await World.driver.findElement(By.xpath('//a[contains(text(),"Job alerts")]')).click();
  
  })
  
  
Then(/^I should be landed on job alerts page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('newalert'));
     
  })

//verifying search recruiters link in Navigation Bar  
When(/^I click on search recruiters Link in Navigation bar$/, async () => {
  await snooze(2000);
  return await World.driver.findElement(By.xpath('//a[contains(text(),"Search recruiters")]')).click();
  
  })
  
  
Then(/^I should be landed on search recruiters page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('employers'));
     
  })


//verifying jobs blog link in Navigation Bar  
When(/^I click on jobs blog link in Navigation bar$/, async () => {
  await snooze(2000);
  return await World.driver.findElement(By.xpath('//a[contains(text(),"Jobs blog")]')).click();
  
  })
  
  
Then(/^I should be landed on careers page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('careers'));
     
  })

/****************
 Scenario: Verify Jobs Links flow
 *****************/




When(/^I click the first job in browse by sector category$/, async () => {

  let jobs = await World.driver.findElements(By.xpath('//div[@class="browse__items"]//a'));
  
  for(let job of jobs)
  {
        global.text = await job.getText();
        console.log(text);
        await job.click();
        break;
   }
  
  return true;
  })
  
  /****************
   Link clicked in above when step is matched with the heading of the page opened.
   *****************/
  
  Then(/^I should be landed on the job category page$/, async () => {
  
  await snooze(2000);
  
  let actualText = await World.driver.findElement(By.xpath('//h1[@id="browsing"]')).getText();
  
  return assert.ok(actualText.includes(text));
  
  })
  
  
  When(/^I click on the first job of the selected sector$/, async () => {
  
  return await World.driver.findElement(By.xpath('//a[@class="js-clickable-area-link"]')).click();
  
  })
  
  
  Then(/^I should see the option to Apply for the job$/, async () => {
  
  let jobApplications = await World.driver.findElements(By.xpath('//a[contains(text(),"Apply")]'));
  
  for(let jobApplication of jobApplications)
  {
        return assert.ok(await jobApplication.isDisplayed());
   }
  
  })
  
  
  /****************
   Scenario: Verify Job search results
   *****************/
  
  When(/^I search for job with name as (.*)$/, async (value) => {
  
  await World.driver.findElement(By.xpath('//input[@id="keywords"]')).sendKeys(value);
  
  return World.driver.findElement(By.xpath('//input[@value="Search"]')).click();
  })
  
  
  Then(/^I should see (.*) as search result$/, async (value) => {
  
  await snooze(2000);
  
  let text = await World.driver.findElement(By.xpath('//a[@class="js-clickable-area-link"]/span')).getText();
  console.log(value);
  console.log(text);
  
  return assert.ok(text == value);
  })
  

//verifying About us link is functional in Footer  
When(/^I click on About Us link in Footer area$/, async () => {
console.log('--------------Ensuring all the links in the footer are functional------------------');
let element = await World.driver.findElement(By.xpath('//a[contains(text(),"About Us")]'));
await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
await snooze(2000);
return element.click();
})
  
  
Then(/^I should be landed on About Us page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('about-us'));
     
  })

//verifying Contact us link is functional in Footer  
When(/^I click on Contact Us link in Footer area$/, async () => {
  let element = World.driver.findElement(By.xpath('//a[contains(text(),"Contact Us")]'));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();
  })
  
  
Then(/^I should be landed on Contact Us page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('contact-us'));
     
  })
  
//verifying Terms & Conditions link is functional in Footer  
When(/^I click on Terms & Conditions link in Footer area$/, async () => {
  let element = World.driver.findElement(By.xpath('//a[contains(text(),"Terms & Conditions")]'));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();
  })
  
  
Then(/^I should be landed on Terms & Conditions page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('terms-and-conditions'));
     
  })
  
//verifying privacy policy link is functional in Footer  
When(/^I click on Privacy Policy link in Footer area$/, async () => {
  let element = World.driver.findElement(By.xpath('//a[contains(text(),"Privacy Policy")]'));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();
  
  })
  
  
Then(/^I should be landed on Privacy Policy page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('privacy-policy'));
     
  })

//verifying advertise with us link is functional in Footer  
When(/^I click on Advertise with us link in Footer area$/, async () => {
  let element = World.driver.findElement(By.xpath('//a[contains(text(),"Advertise with us")]'));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();  
  })
  
  
Then(/^I should be landed on Advertise with us page$/, async () => {
  
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  return assert.ok(currentUrl.includes('recruiters.jobs.economist.com'));
     
  })

//verifying Facebook Icon link is functional in Footer  
When(/^I click on Facebook Icon in Footer area$/, async () => {
  let element = World.driver.findElement(By.css(".social-buttons__item.social-buttons__item--fb"));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();
  })
  
  
Then(/^I should be landed on Facebook economist careers page$/, async () => {
  let tabs = await (await World.driver).getAllWindowHandles();
  console.log(tabs);
  await (await World.driver).switchTo().window((tabs[1]));
 
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  assert.ok(currentUrl.includes('facebook.com/economistcareersnetwork'));
  
  await World.driver.close();

  return (await (await World.driver).switchTo().window((tabs[0])));
  
  })

//verifying Twitter Icon link is functional in Footer  
When(/^I click on Twitter Icon in Footer area$/, async () => {
  let element = World.driver.findElement(By.css(".social-buttons__item.social-buttons__item--tw"));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();  
  })
  
  
Then(/^I should be landed on Twitter economist careers page$/, async () => {
  let tabs = await (await World.driver).getAllWindowHandles();
  console.log(tabs);
  await (await World.driver).switchTo().window((tabs[1]));
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  assert.ok(currentUrl.includes('twitter.com/careersnetwork'));

  await World.driver.close();

  return (await (await World.driver).switchTo().window((tabs[0])));
     
  })

//verifying LinkedIn Icon link is functional in Footer  
When(/^I click on LinkedIn Icon in Footer area$/, async () => {
  let element = World.driver.findElement(By.css(".social-buttons__item.social-buttons__item--in"));
  await World.driver.executeScript("arguments[0].scrollIntoView(true);",element);
  await snooze(2000);
  return element.click();
  })
  
  
Then(/^I should be landed on LinkedIn economist careers page$/, async () => {
  let tabs = await (await World.driver).getAllWindowHandles();
  console.log(tabs);
  await (await World.driver).switchTo().window((tabs[1]));
 
  let currentUrl = await World.driver.getCurrentUrl();
  console.log(currentUrl);
  
  assert.ok(currentUrl.includes('linkedin.com/company/the-economist-careers-network'));
  
  await World.driver.close();

  return (await (await World.driver).switchTo().window((tabs[0])));
  
  })
