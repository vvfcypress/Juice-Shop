///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import errorPage from '../support/pages/ErrorPage';
import { registerNotFull } from '../support/helpers/helperNotFullRegister';


user.email = faker.internet.email({ provider: 'ukr.com' });


describe('Registration tests', () => {
    it('Registration with valid data', () => {

        cy.log('Navigate to home/landing page');
        homePage.visit();

        cy.log('Open registration/authorization page');
        homePage.getHeaderAccountButton().click({ force: true });
        homePage.getHeaderLoginButton().click({ force: true });

        cy.log('Register new user');
        loginPage.getRegisterAccountButton().click({ force: true });
        registrationPage.getEmailField().type(user.email, { force: true });
        registrationPage.getPasswordField().type(user.password, { force: true });
        registrationPage.getPasswordRepeatField().type(user.password, { force: true });
        registrationPage.getSecurityQuestionArea().click({ force: true });
        registrationPage.getSecurityQuestionField().click({ force: true });
        registrationPage.getSecurityAnswerField().type(user.answer, { force: true });
        registrationPage.getRegisterButtonField().click({ force: true });


    })

    it('Registration with invalid email', () => {

        user.email = faker.word.words(1);
       
        registerNotFull(user);
        errorPage.getEmailErrorMessage().should('contain', "Email address is not valid.");
   
        

    
    })
    
    
})