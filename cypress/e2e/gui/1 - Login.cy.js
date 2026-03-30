describe('Login', () => {
  it('Login com Sucesso!', () => {
    cy.login()
    cy.get('[data-cy="app-logo"]').should('be.visible')
  })
})