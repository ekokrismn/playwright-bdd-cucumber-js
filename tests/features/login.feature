Feature: Login Succesfull

    Scenario: Login with valid credentials
        Given the user is on the login page
        When the user enters valid username
        And the user enters valid password 
        And the user click on login button
        Then the user should be redirected to profile page