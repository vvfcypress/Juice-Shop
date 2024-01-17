export default class BasePage {

    constructor() {
        this.elements = {};
        this.elements.headerAccountButton = 'app-navbar #navbarAccount';
        this.elements.headerLoginButton = '#navbarLoginButton';
    }

    getHeaderAccountButton() {
        return cy.get(this.elements.headerAccountButton);
    }

    getHeaderLoginButton() {
        return cy.get(this.elements.headerLoginButton);
    }

}