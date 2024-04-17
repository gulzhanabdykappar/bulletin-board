// Пример интеграционного теста с использованием Cypress
describe('User Flow', () => {
    it('successfully adds and deletes an announcement', () => {
        cy.visit('/');
        cy.get('input[type="text"]').type('New announcement');
        cy.get('button[type="submit"]').click();
        cy.contains('New announcement').should('exist');
        cy.contains('Delete').click();
        cy.contains('New announcement').should('not.exist');
    });
});
