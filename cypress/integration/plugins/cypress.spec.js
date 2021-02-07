describe('Cypress plugin tests', () => {
  it('Application store is exposed to cypress', () => {
    cy.visit('/')
    cy.window().should('have.property', 'store')
  })
})
