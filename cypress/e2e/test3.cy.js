describe('test 3', () => {
  it('Checking online banking tab', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    //Logged in
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('input[value="Sign in"]').click()
    cy.get('.brand').should('contain','Zero Bank')

    //Click on account activity and verify the page is clicked
    cy.get('#account_activity_tab').click()
    cy.get('.board-header').should('contain','Show Transactions')
  })
})