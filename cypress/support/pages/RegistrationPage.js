import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.passwordRepeatField = '#repeatPasswordControl';
        this.elements.securityQuestionArea = '[aria-label="Selection list for the security question"]';
        this.elements.securityQuestionField = '#mat-option-4';
        this.elements.securityAnswerField = '#securityAnswerControl';    
        this.elements.registerButtonField = 'button[id="registerButton"]';
    }

    getEmailField() {
        return cy.get(this.elements.emailField)
    }

    getPasswordField() {
        return cy.get(this.elements.passwordField)
    }

    getPasswordRepeatField() {
        return cy.get(this.elements.passwordRepeatField)
    }

    getSecurityQuestionArea() {
        return cy.get(this.elements.securityQuestionArea)
    }

    getSecurityQuestionField() {
        return cy.get(this.elements.securityQuestionField)
    }

    getSecurityAnswerField() {
        return cy.get(this.elements.securityAnswerField)
    }

    getRegisterButtonField() {
        return cy.get(this.elements.registerButtonField)
    }

}
export default new RegistrationPage();