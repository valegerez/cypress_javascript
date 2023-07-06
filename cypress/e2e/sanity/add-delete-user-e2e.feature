@SANITY
Feature: Add and Delete Users
As an Engr. Candidate
I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
So that I can show my awesome automation skills

  Scenario: Add a user and validate the user has been added to the table
    Given I navigate to teladoc page
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

  Scenario: Delete the user "ValeTest222" from the table and validate the user has been deleted
    Given I navigate to teladoc page
    And I click on "Add User" "button"
    And I fill "First Name" input with value "ValeTest222"
    And I fill "Last Name" input with value "ValeTestLastName222"
    And I fill "User Name" input with value "ValeTestUserName222"
    And I fill "Password" input with value "test1234"
    And I select "Sales Team" option
    And I fill "Email" input with value "testvale222@gmail.com"
    And I fill "Cell Phone" input with value "358908088"
    And I click on "Save" "button"
    When I click on "Delete" "button"
    And I click on "OK" "button"
    Then I should "not see" "ValeTest222" on the table