import BasePage from "./BasePage";

class AuthorizationPage extends BasePage {

    constructor() {
        super();
        this.elements.submitAuthorizationLoginButton = '#loginButton[type = "submit"]';
        this.elements.remberLoginButton = 'span.mat-checkbox-inner-container';
        this.elements.loginEmailField = '#email';
        this.elements.loginPasswordField = '#password';
    }

    visit() {

        cy.visit('/#/login');
    }

    getSubmitAuthorizationLoginButton() {
        return cy.get(this.elements.submitAuthorizationLoginButton)
    }

    getLoginEmailField() {
        return cy.get(this.elements.loginEmailField)
    }

    getLoginPasswordField() {
        return cy.get(this.elements.loginPasswordField)
    }

    getRememberLoginButton() {
        return cy.get(this.elements.remberLoginButton)
    }




}
export default new AuthorizationPage();