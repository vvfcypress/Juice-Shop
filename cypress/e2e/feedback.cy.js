///<reference types="cypress"/>

it('feedback test with cy.request and GET method option', () => {

    let captchaId;
    let captchaExpression;
    let captchaAnswer;


    cy.visit('/');

    cy.get('[aria-label="Open Sidenav"]').click({ force: true });
    cy.get('[aria-label="Go to contact us page"]').click({ force: true });
    cy.get('[aria-label="Field with the name of the author"]').clear({ force: true }).type('Vlad', { force: true });
    cy.get('#comment').type('Good site', { force: true });
    cy.get('[aria-label="Slider for selecting the star rating"]').click({ force: true });

    cy.request({
        method: 'GET',
        url: `https://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/`
    }).then(response => {

        const captchaData = response.body;
        const captchaId = captchaData.captchaId;
        const captchaExpression = captchaData.captcha;
        const captchaAnswer = captchaData.answer;
    })

       cy.get('#captchaControl').type(`${captchaAnswer}`, { force: true })

})


  it('feedback test with cy.request and URL option only', () => {

    let captchaId;
    let captchaExpression;
    let captchaAnswer;


    cy.visit('/');

    cy.get('[aria-label="Open Sidenav"]').click({ force: true });
    cy.get('[aria-label="Go to contact us page"]').click({ force: true });
    cy.get('[aria-label="Field with the name of the author"]').clear({ force: true }).type('Vlad', { force: true });
    cy.get('#comment').type('Good site', { force: true });
    cy.get('[aria-label="Slider for selecting the star rating"]').click({ force: true });


    const captchaEndpoint = 'https://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/';

    cy.request(captchaEndpoint)
        .then(responce => {

            const captchaResponse = responce.body;
            const captchaId = captchaResponse.captchaId;
            const captchaExpression = captchaResponse.captcha;
            const captchaAnswer = captchaResponse.answer;

            console.log('id:', captchaId);
            console.log('expression:', captchaExpression);
            console.log('answer:', captchaAnswer);
        })

    cy.get('#captchaControl').type(`${captchaAnswer}`, { force: true })

  })

















