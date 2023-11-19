import BasePage from "./BasePage";

class HomePage extends BasePage{
    
    constructor(){
        super();
    }

    visit(){
       
        cy.visit('/');
    }

}
export default new HomePage();