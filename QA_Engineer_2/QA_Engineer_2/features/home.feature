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


