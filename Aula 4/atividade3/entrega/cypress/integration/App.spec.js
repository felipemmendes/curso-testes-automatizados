describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('should render the add skill form', () => {
        cy.get('[data-id=form]').should('exist');
    });
    it('should allow for text input in form', () => {
        cy.typeText('[data-id=skill-name]', 'web testing').should('have.value', 'web testing');
        cy.typeText('[data-id=developers]', 'john').should('have.value', 'john');
        cy.typeText('[data-id=technologies]', 'cypress').should('have.value', 'cypress');
        cy.typeText('[data-id=roles]', 'tester').should('have.value', 'tester');
    });
    it('should load the skills list after the form button is clicked', () => {
        cy.intercept('GET', 'https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills', [{
            skillName: 'web testing',
            developers: ['john'],
            profile: {
              technologies: ['cypress'],
              roles: ['tester']
            }
        }]).as('getSkills') // intercept get request

        cy.clickButton('[data-id=add-skill]');
        cy.wait('@getSkills') // wait until request is finished
        cy.get('[data-id=skill-table]').should('be.visible');
    });

});