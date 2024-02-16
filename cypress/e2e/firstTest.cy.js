
///<reference types="cypress"/>
describe('Initial setup for the login', () => {
  it('Verify the login', ()=>{
    cy.visit("http://zero.webappsecurity.com/login.html")
    //cy.get('#user_login').type('username')
    cy.get('input[name*="user"]').first().type('username')
    cy.get('input[name*="user"]').eq(1).type('password')
    // cy.get('#user_password').type('password')
    cy.get('input[value="Sign in"]').click()

    //Verify thet the brand is there
    cy.get('.brand').should('contain','Zero Bank')
  })
})