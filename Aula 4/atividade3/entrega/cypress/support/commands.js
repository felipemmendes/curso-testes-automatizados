Cypress.Commands.add('typeText', (selector, text) => {
    cy.get(selector).type(text)
})

Cypress.Commands.add('clickButton', (selector) => {
    cy.get(selector).click();
})