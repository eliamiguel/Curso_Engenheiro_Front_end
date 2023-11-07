/// <reference types="cypress" />

describe('Testes para agenda', ()=>{
  beforeEach( ()=>{
    cy.visit('https://agenda-contatos-react.vercel.app/')
  } )

  it('Deve incluir os dados na agenda', ()=>{
    cy.get('.adicionar').click()
    cy.get('input').should('have.length', 3)
    cy.get('[type="text"]').type('agenta de contato')
    cy.get('[type="email"]').type(' agenta@gmail.com')
    cy.get('[type="tel"]').type('11 2222 3333 4444')
    
  }) 
  it('Deve alterar contato', ()=>{
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').should('not.contain', 'agenta de contato')
    cy.get('[type="email"]').should('not.contain', 'agenta@gmail.com')
    cy.get('[type="tel"]').should('not.contain', '11 2222 3333 4444')
    
  }) 
    
    it('Remoção de contato', () => {
    cy.get('.sc-iAEyYk').should('not.contain', '.sc-iAEyYk > :nth-child(1)');
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
});
    
})