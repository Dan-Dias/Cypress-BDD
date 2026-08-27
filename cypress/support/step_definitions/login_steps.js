// 2- transformar o Gherkin em método/ação

/// <reference types="cypress" />

import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page"; 
import login_page from "../pages/login_page"; 

Given("I am on login screen", () => {
    home_page.accessLogin();
});

Given("I fill the e-mail", () => {
    login_page.fillEmail();
});

Given("I fill my credentials", () => {
    login_page.fillEmail();
    login_page.fillPassword();
});

When("I click on login button", () => {
   login_page.clickLoginButton();
});

Then("I see the error message {string}", (message) => {
    login_page.checkErrorMessage(message);
});

Then("I see success message {string}", (message) => {
    login_page.checkSuccessMessage(message);
    
});
