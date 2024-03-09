describe('Update user', () => {
    it('Succsessfully update user', () => {
        var user = {
            "name": "limber",
            "url": "https//pokeapi.co/api/v2/ability/7/"
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eq(user.name)
        })
    });
});