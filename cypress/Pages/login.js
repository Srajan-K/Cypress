import loginObj from "../Utils/loginObj";
/**
 * @class containing methods of all Login page
 */
export default class Login{
    /**
     * Methof for login
     * @param {String} username 
     * @param {String} password 
     */
 static loginToApplication(username,password){
  const {userNameInput,passwordInput,signInButton} = loginObj
  cy.get(userNameInput).type(username)
  cy.get(passwordInput).type(password)
  cy.get(signInButton).click()
 }
}