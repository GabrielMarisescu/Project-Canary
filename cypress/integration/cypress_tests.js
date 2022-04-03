describe('Search thru enter', () => {
  it('Visiting Project Canary and searching for a malicious link thru enter', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input')
      .click()
      .type('tailwindcss.com')
      .should('have.value', 'tailwindcss.com')
      .type('{enter}');
    cy.url().should('include', 'results/');
    cy.wait(5000);

    cy.get('.MuiAvatar-img').click();
    cy.url().should('include', '/');
  });
});

describe('Search thru the button ', () => {
  it('Visiting Project Canary and searching for a malicious link thru the button search', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input')
      .click()
      .type('tailwindcss.com')
      .should('have.value', 'tailwindcss.com');
    cy.get('[data-testid="SearchIcon"]').click();

    cy.url().should('include', 'results/');

    cy.wait(5000);
    cy.get('.MuiAvatar-img').click();
    cy.url().should('include', '/');
  });
});
describe('Github page', () => {
  it('Go to the Github page', () => {
    cy.visit('http://localhost:3000/');
    cy.get(
      '[href="https://github.com/GabrielMarisescu/Project-Canary"]'
    ).click();

    cy.url().should('include', 'GabrielMarisescu');
    cy.url().should('include', 'Project-Canary');
  });
});
describe('LinkedIn Page', () => {
  it('Go to the LinkedIn Page', () => {
    cy.visit('http://localhost:3000/');

    cy.get(
      '[href="https://www.linkedin.com/in/gabriel-marisescu/"] > .object-contain'
    ).click();
  });
});
