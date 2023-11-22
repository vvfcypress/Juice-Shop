import BasePage from "./BasePage";

class BasketPage extends BasePage {

    constructor() {
        super();
        this.elements.openBasketButton = '[routerlink="/basket"]';
        this.elements.checkoutButton = 'button#checkoutButton';

        this.elements.addNewAdressButton = 'button[aria-label="Add a new address"]';
        this.elements.provideCountryField = 'input[placeholder="Please provide a country."]';
        this.elements.provideNameField = 'input[placeholder="Please provide a name."]';
        this.elements.provideMobileField = 'input[placeholder="Please provide a mobile number."]';
        this.elements.provideZipField = 'input[placeholder="Please provide a ZIP code."]';
        this.elements.provideAdressField = 'textarea[placeholder="Please provide an address."]';
        this.elements.provideCityField = 'input[placeholder="Please provide a city."]';
        this.elements.provideStateField = 'input[placeholder="Please provide a state."]';
        this.elements.submitButton = '#submitButton';

        this.elements.chechAdressCheckbox = 'input[type="radio"]';
        this.elements.paymentContinueButton = 'button[aria-label="Proceed to payment selection"]';


        this.elements.checkDeliveryCheckbox = 'mat-row', ' Fast Delivery';
        this.elements.deliveryContinueButton = 'button[aria-label="Proceed to delivery method selection"]';


        this.elements.newCardFieldButton = 'span[style="transform: rotate(0deg);"]';
        this.elements.newCardNameField = 'input[type="text"]';
        this.elements.newCardNumberField = 'input[type="number"]';
        this.elements.expiryMonthField = 'select[matnativecontrol]';
        this.elements.expiryYearField = 'select[matnativecontrol]';
        this.elements.newCardSubmitButton = '#submitButton';

        this.elements.checkCardButton = 'input[type="number"]';
        this.elements.finalizeContinueButton = 'Continue';
        this.elements.orderPayButton = 'Place your order and pay';

    }

    getOpenBasketButton() {
        return cy.get(this.elements.openBasketButton, { timeout: 5000 })
    }

    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton, { timeout: 5000 })
    }

    getAddNewAdressButton() {
        return cy.get(this.elements.addNewAdressButton, { timeout: 5000 })
    }

    getProvideCountryField() {
        return cy.get(this.elements.provideCountryField)
    }

    getProvideNameField() {
        return cy.get(this.elements.provideNameField)
    }

    getProvideMobileField() {
        return cy.get(this.elements.provideMobileField)
    }

    getProvideZipField() {
        return cy.get(this.elements.provideZipField)
    }

    getProvideAdressField() {
        return cy.get(this.elements.provideAdressField)
    }

    getProvideCityField() {
        return cy.get(this.elements.provideCityField)
    }

    getProvideStateField() {
        return cy.get(this.elements.provideStateField)
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton, { timeout: 5000 })
    }

    getCheckAdressCheckbox() {
        return cy.get(this.elements.checkDeliveryCheckbox, { timeout: 5000 })
    }

    getPaymentContinueButton() {
        return cy.get(this.elements.paymentContinueButton)
    }

    getCheckDeliveryCheckbox() {
        return cy.get(this.elements.checkDeliveryCheckbox)
    }


    getNewCardFieldButton() {
        return cy.get(this.elements.newCardFieldButton)
    }

    getNewCardNameField() {
        return cy.get(this.elements.newCardNameField)
    }


    getNewCardNumberField() {
        return cy.get(this.elements.newCardNumberField)
    }


    getExpiryMonthField() {
        return cy.get(this.elements.expiryMonthField)
    }

    getExpiryYearField() {
        return cy.get(this.elements.expiryYearField)
    }

    getNewCardSubmitButton() {
        return cy.get(this.elements.newCardSubmitButton)
    }

    getDelivertContinueButton() {
        return cy.get(this.elements.deliveryContinueButton)
    }

    getCheckCardButton() {
        return cy.get(this.elements.checkCardButton)
    }

    getFinalizeContinueButton() {
        return cy.contains(this.elements.finalizeContinueButton)
    }

    getOrderPayButton() {
        return cy.contains(this.elements.orderPayButton)
    }

}
export default new BasketPage();