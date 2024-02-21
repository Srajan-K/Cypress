///<reference types="cypress"/>
// const YAML = require('yamljs')
describe('Read and Write', () => {
    
    it('write file',()=>{
        cy.writeFile('D:\\Practice\\Cypress\\cypress\\inputFiles\\text.txt','Hello World')
        cy.writeFile('D:\\Practice\\Cypress\\cypress\\inputFiles\\jsonFile.json',{
            company:'Codecraft',
            location:'Manglore'
        })
 
    })

    it('Read File',()=>{
        const YAML = require('yamljs')
        cy.readFile('D:\\Practice\\Cypress\\cypress\\inputFiles\\text.txt').should('eq','Hello World')
        cy.readFile('D:\\Practice\\Cypress\\cypress\\inputFiles\\jsonFile.json').its('company').should('eq','Codecraft')
        cy.readFile('D:\\Practice\\Cypress\\cypress\\inputFiles\\student.yaml').then((str)=>{
            const data = YAML.parse(str)
            const java=data.programming_languages.java
            expect(java).to.equal('Intermediate')

        })
        })
    })