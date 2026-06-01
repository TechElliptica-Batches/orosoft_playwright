Feature: Login Functionality Scenario

  Background:
    Given user open "Chrome"
    And user navigate to "http://127.0.0.1:5500/html/test1.html"

  @login @sanity @smoke @az-13729 @aztest-473839
  Scenario: verify user able to login successfully
    When user enter "vaibhav" in "Enter username" textbox
    And user enter "password" in "Enter password" textbox
    And user click on sign in button
    Then user verify dashboard is visible
    
    
  @login @sanity @regression
  Scenario Outline: verify user able to see errormsg
    When user enter "<username>" in "Enter username" textbox
    And user enter "<password>" in "Enter password" textbox
    And user click on sign in button
    Then user verify error msg "<errorMsg>"

    Examples:
      | username | password | errorMsg                    |
      |          | password | username is required        |
      | vaibhav  |          | password is required        |
      | vaibhav1 | password | provide corret credentials  |
      |          |          | provide provide credentials |
