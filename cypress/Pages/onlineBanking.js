import onlineBankingObj from "../Utils/onlineBankingObj";

export default class OnlineBanking{
    static gotoOnlinrBanking(){
        const {OnlineBanking}=onlineBankingObj
        cy.get(OnlineBanking,{timeout:5000}).click()
    }

    static gotoAccountSummary(){
        const {accountSummary}=onlineBankingObj
        cy.get(accountSummary).click()
    }

    static verifyAccountSummaryPage(){
        const {cashAccount}=onlineBankingObj
        cy.contains(cashAccount).should('be.visible')
        .then(()=>{
            cy.log('User is at Account Summary page')
        })
    }

    static gotoAccountActivity(){
        const {accountActivityTab}=onlineBankingObj
        cy.get(accountActivityTab).click()
    }

    static verifyFirstLoanWithdrawal(){
        const{accountDropdown,accountDetailsTable}=onlineBankingObj
        cy.get(accountDropdown).select('4')
        return cy.get(accountDetailsTable).find('tr').find('td').eq(3)
    }

}