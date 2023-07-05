@SANITY
Feature: Add and Delete Users
As an Engr. Candidate
I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
So that I can show my awesome automation skills

  Scenario: Add a user and validate the user has been added to the table
    Given I navigate to teladoc page
    And I click on "Add user" "button"
    And I enter "ValeTest111" on "First Name" "textbox"
    And I enter "ValeLastName111" on "Last Name" "textbox"
    And I enter "UserValeTest111" on "User Name" "textbox"
    And I enter "test123" on "Password" "textbox"
    And I select "Sales Team" frpm "Role" "dropdown"
    And I enter "testvale111@gmail.com" on "Email" "textbox"
    And I enter "358908089" on "Cell Phone" "textbox"
    When I click on "Save" "button"
    Then I should "see" "ValeTest111" on the table

  # Scenario: Delete the user "novak" from the table and validate the user has been deleted
  #   Given I navigate to teladoc page
  #   And I click on "Add user" "button"
  #   And I enter "ValeTest222" on "First Name" "textbox"
  #   And I enter "ValeLastName222" on "Last Name" "textbox"
  #   And I enter "UserValeTest222" on "User Name" "textbox"
  #   And I enter "test1232" on "Password" "textbox"
  #   And I select "Sales Team" frpm "Role" "dropdown"
  #   And I enter "testvale222@gmail.com" on "Email" "textbox"
  #   And I enter "358908088" on "Cell Phone" "textbox"
  #   And I click on "Save" "button"
  #   And I click on "Save" "button"
  #   When I click on "Delete" "button"
  #   Then I should "not see" "ValeTest222" on the table