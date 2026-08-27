Feature: of Register User
    As a customer
    I want to sign up for the application
    To place a purchase order

    Background: Access the register screen
        Given I am on register screen

    Scenario: of Register Name empty
        When I click on register button
        Then I see the error message on register "O campo nome deve ser prenchido"

    Scenario: of Register E-mail empty
        Given I fill the name of register
        When I click on register button
        Then I see the error message on register "O campo e-mail deve ser prenchido corretamente"
    
    Scenario: of Register E-mail invalid
        Given I fill the name of register
        And I fill the e-mail of register invalid
        When I click on register button
        Then I see the error message on register "O campo e-mail deve ser prenchido corretamente"

    Scenario: of Register password empty
        Given I fill the name of register
        And I fill the e-mail of register
        When I click on register button
        Then I see the error message on register "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: of Register password invalid
        Given I fill the name of register
        And I fill the e-mail of register
        And I fill the password of register invalid
        When I click on register button
        Then I see the error message on register "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: of Register Registration successful
        Given I fill my credentials of register
        When I click on register button
        Then I see the success message on register "Cadastro realizado!"