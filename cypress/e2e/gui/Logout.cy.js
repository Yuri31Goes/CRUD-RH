describe('Logout', () => {
    beforeEach( () => {
        cy.login()
    })

    it('Logout com Sucesso!', () => {
    cy.Logout()
    cy.contains('h1','Welcome to').should('be.visible')
  })
})