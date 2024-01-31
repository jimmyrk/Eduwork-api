describe('Update user', () => {
    it('Succsessfully update user', () => {
        var user = {
            "name": "jojo",
            "job": "killer"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    });
});