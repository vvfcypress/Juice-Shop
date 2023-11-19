import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor(){
        super();
        this.elements.registerAccountButton = '[routerlink="/register"]';
    }

    getRegisterAccountButton(){
        cy.log('Navigate on "Not yet a customer?" button');
        return cy.get(this.elements.registerAccountButton)
    }

}

export default new LoginPage();