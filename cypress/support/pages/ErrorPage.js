import BasePage from "./BasePage";

class ErrorPage extends BasePage{

    constructor(){
        super();
        this.emailErrorMessage = '.mat-error.ng-star-inserted';
        this.passwordErrorMessage = '.error.ng-star-inserted';

    }

    getEmailErrorMessage(){
        return cy.get(this.emailErrorMessage, {timeout: 2000})
    }

    getPasswordErrorMessage(){
        return cy.get(this.passwordErrorMessage, {timeout: 2000})
    }
    
}
export default new ErrorPage();