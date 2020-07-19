Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar
    * I should see the search fields
    * I should see sector lists
    * I should see jobs blog
    * I should see featured jobs
    * I should see footer

  Scenario: Verify Navigation of Sign In
    Given I go to the jobs page
    When I click Sign In
    Then I should be landed on Sign In Page

  Scenario: Verify Navigation of Create Account
    Given I go to the jobs page
    When I click Create Account
    Then I should be landed on Create Account Page

  Scenario: Verify links in the navigation bar  
    Given I go to the jobs page 
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

