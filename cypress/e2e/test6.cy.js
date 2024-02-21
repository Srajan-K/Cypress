///<reference types="cypress"/>
describe('Screnario 2', () => {
    it('Logout', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.login('username','password')
    })

})