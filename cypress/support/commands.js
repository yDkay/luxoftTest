Cypress.Commands.add("dataTestId", (input) => {
  cy.get('[data-test-id="' + `${input}` + '"]');
});

Cypress.Commands.add("ariaLabel", (input) => {
  cy.get('[aria-label="' + `${input}` + '"]');
});
