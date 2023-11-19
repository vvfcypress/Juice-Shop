import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.userProfile = 'button[aria-label="Go to user profile"]';

    }

    getUserProfile(){
        return cy.get(this.elements.userProfile, {timeout: 2000})
    }
    
}
export default new AccountPage();