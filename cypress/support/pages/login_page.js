// 3 Criar as ações da page

/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

export const email = faker.internet.email();
export const password = faker.internet.password();

export default  {
        clickLoginButton() {
        cy.get("#btnLogin").click();
    },

    checkErrorMessage(message) {
        cy.get(".invalid_input").should("be.visible").and("contain", message);
        
    },

    checkSuccessMessage(message) {
        cy.get("#swal2-title").should("be.visible").and("contain", message);
        cy.get("#swal2-html-container").should("be.visible").and("contain", "Olá, " + email);
    },

    fillEmail() {
        cy.get("#user").type(email);
    },

     fillEmailAdress() {
        cy.get("#user").type('email123');
    },

    fillPassword() {
        cy.get("#password").type(password);
    }

} 