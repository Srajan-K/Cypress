import homePageObj from "../Utils/homePageObj";

export default class Home{
    /**
     * Method to logout
     */
    static logout(){
        const {userNameDropdown,logoutBtn}=homePageObj
        cy.get(userNameDropdown).click({ multiple: true })
        cy.get(logoutBtn).click()
    }

    static gotoHome(){
       const {icon}=homePageObj
       cy.get(icon).click()
    }

    static search(searchText){
        const {searchTextBox,searchReasult} = homePageObj
        cy.get(searchTextBox).type(searchText).type('{enter}')
        cy.get(searchReasult).should('contain','Zero - Online Statements')
    }

}