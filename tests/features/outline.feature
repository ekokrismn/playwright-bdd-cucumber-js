@anotherLogin
Feature: Login ecommerce website

    Scenario: Successfuly login with valid credentials
    Given I am on the login page
    When I enter valid "<ekokrismn@gmail.com>" And valid "<Mobile123@>"
    And I clicks on login button
    Then I should be able to login