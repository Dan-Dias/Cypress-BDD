// 3 Criar as ações da page

/// <reference types="cypress" />

export default  {
    accessLogin() { 
        cy.visit("https://automationpratice.com.br/").get("#top_header");
        cy.get(".fa-user").click();
    }
} 