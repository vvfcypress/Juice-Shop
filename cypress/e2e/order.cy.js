///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { register } from '../support/helpers/helperRegister';
import { login } from '../support/helpers/helper';
import { faker } from '@faker-js/faker';
user.email = faker.internet.email({ provider: 'ukr.com' });



describe('Order tests ', () => {

    it('Order test', () => {

        register(user);
        login(user);

        cy.log('Searching product and add to basket');

        cy.get('.mat-icon.notranslate.mat-ripple').eq(1).click({ force: true });
        cy.get('#mat-input-0').type('Apple Pomace{enter}', { force: true });
        cy.get('#searchValue', { timeout: 5000 }).should('contain', 'Apple Pomace');
        cy.get('button[aria-label="Add to Basket"]', { timeout: 5000 }).click({ force: true });

        cy.log('Open basket');

        cy.get('button[aria-label="Show the shopping cart"]', { timeout: 5000 }).click({ force: true });
        cy.get('button#checkoutButton', { timeout: 5000 }).click({ force: true });

        cy.log('Add new adress');

        cy.get('button[aria-label="Add a new address"]', { timeout: 5000 }).click({ force: true });
        cy.get('input[placeholder="Please provide a country."]').type('USA', { force: true });
        cy.get('input[placeholder="Please provide a name."]').type('Vlad', { force: true });
        cy.get('input[placeholder="Please provide a mobile number."]').type('1234567', { force: true });
        cy.get('input[placeholder="Please provide a ZIP code."]').type('12345', { force: true });
        cy.get('textarea[placeholder="Please provide an address."]').type('BostonStreet', { force: true });
        cy.get('input[placeholder="Please provide a city."]').type('Boston', { force: true });
        cy.get('input[placeholder="Please provide a state."]').type('BostonState', { force: true });
        cy.get('#submitButton').click({ force: true });

        cy.log('Select an adress');

        cy.get('input[type="radio"]', { timeout: 15000 }).eq(0).click({ force: true });
        cy.get('button[aria-label="Proceed to payment selection"]', { timeout: 5000 })
            .click({ force: true });

        cy.log('Choose a delivery speed');

        cy.contains('mat-row', ' Fast Delivery').find('[class="mat-radio-container"]').click();
        cy.get('button[aria-label="Proceed to delivery method selection"]').click({ force: true });

        cy.log(' Open My Payment Options');

        cy.get('span[style="transform: rotate(0deg);"]').eq(0).click({ force: true });
        cy.get('input[type="text"]').eq(1).type('vlad', { force: true });
        cy.get('input[type="number"]').type('1234567890123456');
        cy.get('select[matnativecontrol]').eq(0).select('1');
        cy.get('select[matnativecontrol]').eq(1).select('2090');
        cy.get('#submitButton').click();
        cy.get('input[type="radio"]').eq(0).click({ force: true });
        cy.contains('Continue').click({ force: true });
        cy.contains('Place your order and pay').click({ force: true });
        cy.get('.confirmation').eq(0).should('contain', 'Thank you for your purchase!');

    })

})