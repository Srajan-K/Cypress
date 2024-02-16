describe('Screnario 2', () => {
  it('Logout', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    //Logged in
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('input[value="Sign in"]').click()
    cy.get('.brand').should('contain','Zero Bank')
    
    //Log out
    cy.get('.caret').click({ multiple: true })
    cy.get('#logout_link').click()
    cy.get('#signin_button').should('contain','Signin')
  })
})