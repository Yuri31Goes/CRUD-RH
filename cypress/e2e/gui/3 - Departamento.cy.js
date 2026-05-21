import { faker } from "@faker-js/faker"
describe('Criar Departamento', ()=>{

 beforeEach(()=>{

   cy.login()

 })


 it('Criar Departamento com sucesso!', ()=>{
  const departamento = {
    nome: `Departamento-${faker.string.alphanumeric(10)}`,
    código: faker.string.alphanumeric(10),
    gestor: faker.internet.username()

  }
 cy.CriarDepartamento(departamento)
 cy.get('[data-content=""] > div').should('have.text','Departamento criado')

    
 })






})