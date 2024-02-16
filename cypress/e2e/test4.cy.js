describe('test 4', () => {
  it('searc in the search box', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    //Logged in
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('input[value="Sign in"]').click()
    cy.get('.brand').should('contain','Zero Bank')

    //Search in the search box
    cy.get('#searchTerm').type('Zero - Online Statements').type('{enter}')
    cy.get('li > a[href="/bank/online-statements.html"]').should('contain','Zero - Online Statements')
  })
})