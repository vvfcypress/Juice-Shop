///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { register } from '../support/helpers/helperRegister';
import { login } from '../support/helpers/helper';


describe('Order tests ', () => {

    it('Order test', () => {


        register(user);
        login(user);

        cy.log('Searching product and add to basket');

        cy.get('.mat-icon.notranslate.mat-ripple').eq(1).click({ force: true });
        cy.get('#mat-input-0').type('Apple Pomace{enter}', { force: true });
        cy.get('#searchValue', { timeout: 5000 }).should('contain', 'Apple Pomace');
        cy.get('button[aria-label="Add to Basket"]', { timeout: 15000 }).click({ force: true });

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
            .click({ force: true }); //В этом блоке  чекбокс с адрессом выбирается и кнопка Continue кликается, но не срабатывает. 
        //Адресс не выбирается.  В обработчике выдает 400 ошибку./api/adresses/undefined

        cy.log('Choose a delivery speed');// в этом блоке уже адресс не выбран и кнопка  Continue is disabled

        cy.get('input[type="radio"]', { timeout: 15000 }).eq(0).click({ force: true });
        cy.get('button[aria-label="Proceed to delivery method selection"]').click({ force: true });

        // Дальше соответственно код уже не работает.

        // cy.log(' Open My Payment Options');
        // cy.get('.mat-expansion-panel-header-description.ng-tns-c150-48',{ timeout: 5000 }).type('1234567', { force: true });









    })


})