///<reference types="cypress"/>
describe('Training test of restore me',()=>{
      beforeEach(function(){
        cy.visit(Cypress.env('qa_url'))
        cy.get('.login-form-input-field').first().type(Cypress.env('username'))
        cy.get('input[type="password"]').type(Cypress.env('password'))
        cy.get('.generic-button').click()
      })
    it('Add provider',()=>{
    //     cy.visit(Cypress.env('qa_url'))
    //     cy.get('.login-form-input-field').first().type(Cypress.env('username'))
    //     cy.get('input[type="password"]').type(Cypress.env('password'))
    //     cy.get('.generic-button').click()
    //     // cy.wait(10000)}
        cy.get('span[title="Providers"]',{timeout:30000}).should('have.text','Providers')
        cy.get('span[class="nurture-icon menu-icon"]').click()

        //Add provider
        cy.contains('Add Provider').click()

        cy.contains('Enter the following details').should('be.visible')
        cy.get('select[placeholder="Select salutation type"]').select('Mr').should('have.value','Mr')
        cy.get('input[placeholder*="John Cooper"]').type('Automated Doctor')
        cy.get('input[placeholder*="Johncooper@gmail.com"]').type('automated@maildrop.cc')
        cy.get('input[placeholder*="+1XXXXXXXXXX"]').first().type('+1254235625')
        cy.get('input[placeholder*="45"]').type('40')
        cy.get('[placeholder="Select gender"]').select('male')
        cy.get('[placeholder*="Select provider type"]').select('Doctor')
        cy.get('[placeholder*="Select designation"]').select('Medical Oncologist')
        cy.get('[placeholder*="Select location"]').select('New York')
        cy.get('[placeholder*="Add"]').type('Automation test generated Doctor')
        cy.contains('Add new provider').click()

        //Verify provider created
        cy.wait(2000)
        cy.get('[placeholder="Search Providers"]').type('Automated Doctor')
        cy.get('div[class="page-data-container"] span[class="pagination-count-data"]').should('contain','of 1')
        .then(()=>{
            cy.log('Provider successfully Created')
        })

        //Delete Created Provider
        cy.get('input[type="checkbox"]').first().click()
        cy.get('span[class*="remove-green-icon"]+span').click()
        cy.get('div[class=" confirmation-interface"] button[class="generic-button "]').click()

        //Verify Delete
        cy.get('.empty-search-results').should('be.visible')
        .then(()=>{
            cy.log('Provider successfully Deleted')
        })
    })

    it('Add patient',()=>{
        // cy.visit(Cypress.env('qa_url'))
        // cy.get('.login-form-input-field').first().type(Cypress.env('username'))
        // cy.get('input[type="password"]').type(Cypress.env('password'))
        // cy.get('.generic-button').click()
        // cy.wait(10000)
        cy.get('span[title="Providers"]',{timeout:30000}).should('have.text','Providers')
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
              return false
            }
          })
        //Add patient
        cy.wait(2000)
        cy.get('span[class*="patients-icon"]+span').click()
        cy.get('span[title="Patients"]',{timeout:10000}).should('have.text','Patients')
        cy.get('span[class="nurture-icon menu-icon"]').click()

        cy.contains('Add Patient').click()
        cy.contains('Enter the following details').should('be.visible')
        cy.get('input[placeholder*="John Cooper"]').type('Automated Patient')
        cy.get('label[class="form-label"]+select').select('male')
        cy.get('input[placeholder*="Johncooper@gmail.com"]').type('automatedpatient@maildrop.cc')
        cy.get('input[placeholder*="+1XXXXXXXXXX"]').eq(1).type('+1254235625')
        cy.get('label[for="No"]').click('topRight')
        cy.contains('Add new patient').click()
        cy.wait(5000)
        cy.contains('Invited Patients').click()
        cy.wait(5000)
        cy.get('input[placeholder="Search Patients"]').type('Automated Patient')
        cy.wait(2000)
        cy.log(cy.get('.nurture-table-body').find('tr'))
        cy.get('.nurture-table-body').find('tr').each(function(row, i){
            expect(i).to.equal(0)
        })
        // cy.get('div[class="page-data-container"] span[class="pagination-count-data"]').should('contain','of 1')
        .then(()=>{
                cy.log('Patient successfully Created')
            })

        // Delete Patient
        cy.get('input[type="checkbox"]').first().check()
        cy.get('span[class*="remove-green-icon"]+span').click()
        cy.get('textarea[placeholder="Write your message"]').type('Test Patient')
        cy.get('div[class="interface-row"] button[class="generic-button "]').click()

        //Verify Delete
        cy.get('.empty-search-results').should('be.visible')
        .then(()=>{
            cy.log('Patient successfully Deleted')
        })
    })

})