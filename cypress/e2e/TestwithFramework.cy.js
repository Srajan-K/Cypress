import Base from "../Pages/Base"
import Login from "../Pages/login"
import Home from "../Pages/HomePage"
import OnlineBanking from "../Pages/onlineBanking"
import PayBill from "../Pages/PayBillPage"

///<reference types="cypress"/>
describe('Trying for framework',()=>{

    beforeEach(()=>{
        Base.naviagate()
        cy.fixture("credentials").then((loginData)=>{
        Login.loginToApplication(loginData.username,loginData.Password)
    })
})

    it('Logout',()=>{
        cy.wait(2000)
        Home.logout()
     }) 

    it('Search feature',()=>{
       Home.search('Zero - Online Statements')
    }) 

    it('Account Summary page',()=>{
        Home.gotoHome()
        OnlineBanking.gotoOnlinrBanking()
        OnlineBanking.gotoAccountSummary()
        OnlineBanking.verifyAccountSummaryPage()
    })

    it('Checking loan amount in account activity',()=>{
        OnlineBanking.gotoAccountActivity()
        OnlineBanking.verifyFirstLoanWithdrawal().should('contain','770')
    })

    it('Pay loan amount',()=>{
        PayBill.gotoPayBill()
        PayBill.makeAPayment().should('be.visible')

    })

  
})