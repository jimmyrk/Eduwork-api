describe('Basic Auth', function () {
    it('successfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it('successfully login using headers', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth'), {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        }
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
});