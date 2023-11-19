
export function login(user) {

    cy.log('Open website login page');
    cy.visit('/#/login');

    cy.log('Log registerd user');
    cy.get('#email').type(user.email, {force: true});
    cy.get('#password').type(user.password, {force: true});
    cy.get('#loginButton[type = "submit"]').click({force: true});

    //cy.log('Verify user email on account page');    
    //cy.get('app-navbar #navbarAccount').click({force: true});
    //cy.get('button[aria-label="Go to user profile"]').should('contain', user.email);
 
}

