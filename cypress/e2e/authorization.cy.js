///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import accountPage from '../support/pages/AccountPage';
import authorizationPage from '../support/pages/AuthorizationPage';
import errorPage from '../support/pages/ErrorPage';
import { register} from '../support/helpers/helperRegister';
import { login } from '../support/helpers/helper';



user.email = faker.internet.email({ provider: 'ukr.com' });


describe('Authorization tests ', () => {

    it('Authorization test with registred user', () => {


        register(user);

        cy.log('Open website login page');
        authorizationPage.visit();

        cy.log('Log registerd user');
        authorizationPage.getLoginEmailField().type(user.email, { force: true });
        authorizationPage.getLoginPasswordField().type(user.password, { force: true });
        authorizationPage.getRememberLoginButton().click({ force: true });
        authorizationPage.getSubmitAuthorizationLoginButton().click({ force: true });

        cy.log('Verify user email on account page');
        homePage.getHeaderAccountButton().click({ force: true });
        accountPage.getUserProfile().should('contain', user.email);

    })

    it('Authorization test with incorrect password', () => {

        register(user);
        user.password = faker.number.int(10);
        login(user);
        errorPage.getPasswordErrorMessage().should('contain', "Invalid email or password");
        
       
    })

})