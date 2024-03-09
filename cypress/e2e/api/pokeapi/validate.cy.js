/// <reference types="cypress" />

describe('Automation API with Pokeapi', () => {
    it('Successfully validate content-type and response body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');

        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto');
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    it.only('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/venusaur').as('venusaur');
        cy.get('@venusaur').its('body').should('deep.include', { name: "venusaur" })
    });

});
