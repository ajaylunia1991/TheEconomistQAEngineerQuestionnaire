Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs.economist.com page
    Then I should see the navigation bar
    * I should see the search fields
    * I should see sector lists
    * I should see jobs blog
    * I should see featured jobs
    * I should see footer

  Scenario: Verify Navigation of Sign In
    Given I go to the jobs.economist.com page
    When I click Sign In
    Then I should be landed on Sign In Page

  Scenario: Verify Navigation of Create Account
    Given I go to the jobs.economist.com page
    When I click Create Account
    Then I should be landed on Create Account Page

  Scenario: Verify links in the navigation bar  
    Given I go to the jobs.economist.com page 
    When I click on Home Link in Navigation bar
    Then I should be landed on Home page
    When I click on Find a job Link in Navigation bar
    Then I should be landed on jobs page
    When I click on job alerts link in Navigation bar
    Then I should be landed on job alerts page 
    When I click on search recruiters Link in Navigation bar
    Then I should be landed on search recruiters page
    When I click on jobs blog link in Navigation bar
    Then I should be landed on careers page

  Scenario: Verify Jobs Links flow
      Given I go to the jobs.economist.com page
      When I click the first job in browse by sector category
      Then I should be landed on the job category page
      When I click on the first job of the selected sector
      Then I should see the option to Apply for the job


  Scenario: Verify Job search results
      Given I go to the jobs.economist.com page
      When I search for job with name as Head of Operational Risk
      Then I should see Head of Operational Risk as search result


  Scenario: Ensuring all the links in the footer are functional  
    Given I go to the jobs.economist.com page 
    When I click on About Us link in Footer area 
    Then I should be landed on About Us page 
    When I click on Contact Us link in Footer area
    Then I should be landed on Contact Us page
    When I click on Terms & Conditions link in Footer area 
    Then I should be landed on Terms & Conditions page
    When I click on Privacy Policy link in Footer area 
    Then I should be landed on Privacy Policy page 
    When I click on Advertise with us link in Footer area
    Then I should be landed on Advertise with us page
    Given I go to the jobs.economist.com page
    When I click on Facebook Icon in Footer area
    Then I should be landed on Facebook economist careers page
    Given I go to the jobs.economist.com page
    When I click on Twitter Icon in Footer area 
    Then I should be landed on Twitter economist careers page
    Given I go to the jobs.economist.com page
    When I click on LinkedIn Icon in Footer area
    Then I should be landed on LinkedIn economist careers page


    Scenario: Verify Creation of Account on jobs.economist.com page
    Given I go to the jobs.economist.com page
    When I click Create Account
    Then I should be landed on Create Account Page
    When I enter the details Title: Mr First name: Ajay Last name: Lunia Email: ajaylunia12345@gmail.com Password: abc@1234 and confirm Password: abc@1234
    * I check all the conditions and create account
    Then I should see Account Created
