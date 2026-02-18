Cypress.Commands.add('login', (
    Email = Cypress.env('Usuário_E-mail'),
    Senha = Cypress.env('Usuário_Senha')
)=> { 

    const login = () => {
        cy.visit('')
        cy.get('#email').type(Email)
        cy.get('#password').type(Senha,{log: false})
        cy.get('.inline-flex').click()
    }

    login()

 })