# code setup 

## Setup

Follow the following steps :

* `delete node_modules`
* `npm install`

Above steps will setup the test environment 

## To run test

* `npm run test`

## To Generate Reports

#JSON REPORTS :- 
* ./node_modules/.bin/cucumber-js --format json:./reports/cucumber-json-report.json

#HTML REPORTS :-
* ./node_modules/gulp/bin/gulp.js cucumberReports

# Note  

* `I have run this test on "chromedriver": "^83.0.0", as i didn't received upgrade of chromedriver 84.0.0`






