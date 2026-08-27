// 2- transformar o Gherkin em método/ação

/// <reference types="cypress" />

import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import register_page from "../pages/register_page"; 

Given("I am on register screen", () => {
    register_page.accessRegister();
});

Given("I fill the name of register", () => {
    register_page.fillName();
});

Given("I fill the e-mail of register invalid",  () => {
     register_page.fillEmailInvalid();
});

Given("I fill the e-mail of register", () => {
    register_page.fillEmail();
});

Given("I fill the password of register invalid", () => {
    register_page.fillPasswordInvalid();
});

Given("I fill my credentials of register", () => {
    register_page.fillName();
    register_page.fillEmail();
    register_page.fillPassword();
});

When("I click on register button", () => {
    register_page.clickRegisterButton();
});

Then("I see the error message on register {string}", (message) => {
    register_page.checkErrorMessage(message);
});

Then("I see the success message on register {string}", (message) => {
    register_page.checkSuccessMessage(message);
});










