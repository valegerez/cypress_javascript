@SANITY
Feature: Add and Delete Users
As an Engr. Candidate
I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
So that I can show my awesome automation skills

Background: Navigate on Page
    Given I navigate to teladoc page

  Scenario: Add a user and validate the user has been added to the table
    And I click on "Add User" "button"
    And I fill "First Name" input with value "ValeTest111"
    And I fill "Last Name" input with value "ValeTestLastName111"
    And I fill "User Name" input with value "ValeTestUserName111"
    And I fill "Password" input with value "test123"
    And I select "Sales Team" option
    And I fill "Email" input with value "testvale111@gmail.com"
    And I fill "Cell Phone" input with value "358908089"
    When I click on "Save" "button"
    Then I should "see" "ValeTest111" on the table

  Scenario: Delete the user "novak" from the table and validate the user has been deleted
    And I should "see" "novak" on the table
    When I click on "Delete" "button"
    And I click on "OK" "button"
    Then I should "not see" "novak" on the table