describe('Get List Users', () => {
    it('verify the user list will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});