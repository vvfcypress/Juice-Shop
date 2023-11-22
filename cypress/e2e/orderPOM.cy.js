///<reference types="cypress"/>

import basketPage from '../support/pages/BasketPage';
import accountPage from '../support/pages/AccountPage';

import user from '../fixtures/user.json';
import { register } from '../support/helpers/helperRegister';
import { login } from '../support/helpers/helper';
import { faker } from '@faker-js/faker';
import { findProduct } from '../support/helpers/searchHelper';
user.email = faker.internet.email({ provider: 'ukr.com' });



describe('Order tests ', () => {

    it('Order test', () => {

        register(user);
        login(user);

        cy.log('Searching product and add to basket');

        findProduct('Raspberry Juice (1000ml)');

        cy.log('Open basket');

        basketPage.getOpenBasketButton().click({ force: true });
        basketPage.getCheckoutButton().click({ force: true });

        cy.log('Add new adress');

        basketPage.getAddNewAdressButton().click({ force: true });
        basketPage.getProvideCountryField().click({ force: true });
        basketPage.getProvideNameField().type('USA', { force: true });
        basketPage.getProvideMobileField().type('1234567', { force: true });
        basketPage.getProvideZipField().type('12345', { force: true });
        basketPage.getProvideAdressField().type('BostonStreet', { force: true });
        basketPage.getProvideCityField().type('Boston', { force: true });
        basketPage.getProvideStateField().type('BostonState', { force: true });
        basketPage.getSubmitButton().click({ force: true });

        cy.log('Select an adress');

        basketPage.getCheckAdressCheckbox().eq(0).click({ force: true });
        basketPage.getPaymentContinueButton().click({ force: true });

        cy.log('Choose a delivery speed');

        basketPage.getCheckDeliveryCheckbox().eq(0).click();
        basketPage.getDelivertContinueButton().click({ force: true });

        cy.log(' Open My Payment Options');

        basketPage.getNewCardFieldButton().eq(0).click({ force: true });
        basketPage.getNewCardNameField().eq(1).type('vlad', { force: true });
        basketPage.getNewCardNumberField().type('1234567890123456');
        basketPage.getExpiryMonthField().eq(0).select('1');
        basketPage.getExpiryYearField().eq(1).select('2090');
        basketPage.getNewCardSubmitButton().click();
        basketPage.getCheckCardButton().eq(0).click({ force: true });
        basketPage.getFinalizeContinueButton().click({ force: true });
        basketPage.getOrderPayButton().click({ force: true });

        accountPage.getOrderSummary().eq(0).should('contain', 'Thank you for your purchase!');

    })

})