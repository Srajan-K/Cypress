import payBillObj from "../Utils/payBillObj";

export default class PayBill{

    static gotoPayBill(){
        const {payBill}=payBillObj
        cy.contains(payBill).click()
    }

    static makeAPayment(){
        const {Payee,account,amount,date,datePicker,description,pay,SuccessAlert}=payBillObj
        cy.get(Payee).select('apple')
        cy.get(account).select('4')
        cy.get(amount).type(500)
        cy.get(date).click()
        cy.get(datePicker).eq(4).click()
        cy.wait(1000)
        cy.get(description).type('Pay description')
        cy.get(pay).click()
        return cy.get(SuccessAlert,{timeout:5000})
    }
}