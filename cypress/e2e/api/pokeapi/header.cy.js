describe('Validate Header and Response Body', () => {
    it('Successfully validate content-type and response body', () => {
        // Lakukan permintaan ke API untuk mendapatkan informasi tentang Pokemon Ditto
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');

        // Assertion untuk validasi content-type pada header
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8');

        // Assertion untuk validasi response body
        cy.get('@pokemon').its('body')
            .should('have.property', 'name', 'ditto'); // Memastikan bahwa nama Pokemon adalah "ditto"
        // Anda bisa menambahkan assertion lainnya sesuai dengan properti yang ingin Anda periksa pada response body
    });
});
