///<reference types="cypress"/>

    it('Order test', () => {

        cy.visit('/');

        cy.get('[aria-label="Open Sidenav"]').click({ force: true });
        cy.get('[aria-label="Go to contact us page"]').click({ force: true });
        cy.get('[aria-label="Field with the name of the author"]').clear({ force: true }).type('Vlad', { force: true });
        cy.get('#comment').type('Good site', { force: true });
        cy.get('[aria-label="Slider for selecting the star rating"]').click({ force: true });


        const captchaEndpoint = 'https://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/';

        fetch(captchaEndpoint)
            .then(response => response.json())
            .then(captchaResponse => {

                const captchaId = captchaResponse.captchaId;
                const captchaExpression = captchaResponse.captcha;
                const captchaAnswer = captchaResponse.answer;

                console.log('id:', captchaId);
                console.log('expression:', captchaExpression);
                console.log('answer:', captchaAnswer);
            })

        cy.get('#captchaControl').type(`${captchaEndpoint.captchaAnswer}`, { force: true })

        //cy.screenshot();
    })
       
    




