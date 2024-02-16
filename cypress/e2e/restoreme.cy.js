///<reference types="cypress"/>
describe('Training test of restore me',()=>{
    // it('Add provider',()=>{
    //     cy.visit('https://dashboard-qa.restoreme.care/')
    //     cy.get('.login-form-input-field').first().type('admin@nurture.com')
    //     cy.get('input[type="password"]').type('^wL<F0X1k4kE')
    //     cy.get('.generic-button').click()
    //     // cy.wait(10000)
    //     cy.get('span[title="Providers"]',{timeout:30000}).should('have.text','Providers')
    //     cy.get('span[class="nurture-icon menu-icon"]').click()

    //     //Add provider
    //     cy.contains('Add Provider').click()

    //     cy.contains('Enter the following details').should('be.visible')
    //     cy.get('select[placeholder="Select salutation type"]').select('Mr').should('have.value','Mr')
    //     cy.get('input[placeholder*="John Cooper"]').type('Automated Doctor')
    //     cy.get('input[placeholder*="Johncooper@gmail.com"]').type('automated@maildrop.cc')
    //     cy.get('input[placeholder*="+1XXXXXXXXXX"]').first().type('+1254235625')
    //     cy.get('input[placeholder*="45"]').type('40')
    //     cy.get('[placeholder="Select gender"]').select('male')
    //     cy.get('[placeholder*="Select provider type"]').select('Doctor')
    //     cy.get('[placeholder*="Select designation"]').select('Medical Oncologist')
    //     cy.get('[placeholder*="Select location"]').select('New York')
    //     cy.get('[placeholder*="Add"]').type('Automation test generated Doctor')
    //     cy.contains('Add new provider').click()

    //     //Verify provider created
    //     cy.wait(2000)
    //     cy.get('[placeholder="Search Providers"]').type('Automated Doctor')
    //     cy.get('div[class="page-data-container"] span[class="pagination-count-data"]').should('contain','of 1')
    //     .then(()=>{
    //         cy.log('Provider successfully Created')
    //     })

    //     //Delete Created Provider
    //     cy.get('input[type="checkbox"]').first().click()
    //     cy.get('span[class*="remove-green-icon"]+span').click()
    //     cy.get('div[class=" confirmation-interface"] button[class="generic-button "]').click()

    //     //Verify Delete
    //     cy.get('.empty-search-results').should('be.visible')
    //     .then(()=>{
    //         cy.log('Provider successfully Deleted')
    //     })
    // })

    it('Add patient',()=>{
        cy.visit('https://dashboard-qa.restoreme.care/')
        cy.get('.login-form-input-field').first().type('admin@nurture.com')
        cy.get('input[type="password"]').type('^wL<F0X1k4kE')
        cy.get('.generic-button').click()
        // cy.wait(10000)
        cy.get('span[title="Providers"]',{timeout:30000}).should('have.text','Providers')
        


        //Add patient
        cy.contains('Patients').click()
        cy.get('span[title="Patients"]',{timeout:10000}).should('have.text','Patients')
        // cy.get('span[class="nurture-icon menu-icon"]').click()

        cy.contains('Add Patient').click()
        cy.contains('Enter the following details').should('be.visible')
        cy.get('input[placeholder*="John Cooper"]').type('Automated Patient')
        cy.get('[placeholder="Select gender"]').select('male')
        cy.get('input[placeholder*="Johncooper@gmail.com"]').type('automatedpatient@maildrop.cc')
        cy.get('input[placeholder*="+1XXXXXXXXXX"]').first().type('+1254235625')
        cy.get('input[id="No"]').check()
        cy.contains('Add new patient').click()
        cy.wait(5000)
        cy.contains('Invited Patients').click()
        cy.wait(5000)
        cy.get('input[placeholder="Search Patients"]').type('Automated Patient')
        cy.get('div[class="page-data-container"] span[class="pagination-count-data"]').should('contain','of 1')
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