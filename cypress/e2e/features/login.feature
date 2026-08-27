# Criar o cenário
Feature: Login
    As a customer
    I want to log in to the application
    To place a purchase order

    Scenario: Login E-mail empty
        Given I am on login screen
        When I click on login button
        Then I see the error message "E-mail inválido"

    Scenario: Login password empty
        Given I am on login screen
        And I fill the e-mail
        When I click on login button
        Then I see the error message "Senha inválida"

     Scenario: Login successful
        Given I am on login screen
        And I fill my credentials
        When I click on login button
        Then I see success message "Login realizado"