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

 Cypress.Commands.add('Logout', ()=> {
    cy.get('[data-cy="user-menu"]').click()
    cy.get('[data-cy="menu-logout"]').click()
})

 Cypress.Commands.add('CriarDepartamento', (departamento)=> {
    //Acessar CRUD departamento 
    cy.get('[data-cy="mobile-menu-toggle"]').click()
    cy.get('[data-cy="nav-departments"]').click()
    //Criar Novo departamento
    cy.get('[data-cy="create-department-button"]').click()
    cy.get('[data-cy="input-dept-name"]').type(departamento.nome)
    cy.get('[data-cy="input-dept-code"]').type(departamento.código)
    cy.get('[data-cy="input-dept-manager"]').type(departamento.gestor)
    cy.get('[data-cy="save-department"]').click()
})