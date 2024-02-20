/**
 * @class to have all the common methods
 */
export default class Base{
    /**
     * Method to navigate to the url
     */
 static naviagate(){
    cy.visit('http://zero.webappsecurity.com/login.html')
 }
}