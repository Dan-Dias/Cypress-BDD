// 3 Criar as ações da page

/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

export const email = faker.internet.email();
export const password = faker.internet.password();
export const name = faker.person.fullName();

export default  {
    accessRegister() {
        cy.visit("https://automationpratice.com.br/register");
    },

    clickRegisterButton() {
        cy.get("#btnRegister").click();
    },

    checkErrorMessage(message) {
        cy.get("#errorMessageFirstName").should("be.visible").and("contain", message);
    },

   checkSuccessMessage(message) {
        cy.get("#swal2-title").should("be.visible").and("contain", message);
        cy.get("#swal2-html-container").should("be.visible").and("contain", "Bem-vindo " + name);
    },
    
    fillName() {
        cy.get("#user").type(name);
    },

    fillEmailInvalid() {
        cy.get("#email").type("invalid-email");
    },

    fillEmail() {
        cy.get("#email").type(email);
    },

    fillPasswordInvalid() {
        cy.get("#password").type("123");
    },

     fillPassword() {
        cy.get("#password").type(password);
    }

} 