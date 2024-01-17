export function register(user) {

    cy.log('Navigate to home/landing page');
    cy.visit('/#/');
    cy.get('[aria-label="dismiss cookie message"]').click({ force: true })

    cy.log('Open registration/authorization page');
  
    cy.get('app-navbar #navbarAccount').click({ force: true });
    cy.get('#navbarLoginButton').click({ force: true });

    cy.log('Register new user');
    cy.get('[routerlink="/register"]').click({ force: true });
    cy.get('#emailControl').type(user.email, { force: true });
    cy.get('#passwordControl').type(user.password, { force: true });
    cy.get('#repeatPasswordControl').type(user.password, { force: true });
    cy.get('[aria-label="Selection list for the security question"]').click({ force: true });
    cy.get('#mat-option-4').click({ force: true });
    cy.get('#securityAnswerControl').type(user.answer, { force: true });
    cy.get('button[id="registerButton"]').click({ force: true });
}

