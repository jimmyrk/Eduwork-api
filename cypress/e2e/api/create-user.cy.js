describe('Create New User', () => {
    it('Successfully create new user', () => {
        var users = {
            "name": "koko",
            "job": "singer"
        }
        cy.request('POST', 'https://reqres.in/api/uers', users).then((response) => {
            expect(response.status).equal(201)
            cy.log(JSON.stringify(response.body))
        })
    });
}); 