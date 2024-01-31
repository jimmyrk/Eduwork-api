describe('Login via API', function () {
    it('successfully login by sending request with credentials', () => {
        cy.request({
            method: 'POST',
            url: 'https://kasir-api.belajarqa.com/authentications',
            body: {
                email: 'sanber123@mail.com',
                password: 'sanber123@'
            }
        }).then((response) => {
            expect(response.status).equal(201)
            cy.log(JSON.stringify(response.body))
        })
    });

    it('successfully login using headers', () => {
        cy.request({
            method: 'POST',
            url: 'https://kasir-api.belajarqa.com/authentications',
            headers: {
                authorization: 'Basic c2FuYmVyMTIzQG1haWwuY29tOnNhbmJlcjEyM0A='
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(400)
            cy.log(JSON.stringify(response.body))
        });
    });
});
