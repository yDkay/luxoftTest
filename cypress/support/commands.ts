Cypress.Commands.add("dataTestId", (input: string) => {
  cy.get('[data-test-id="' + `${input}` + '"]');
});

Cypress.Commands.add("ariaLabel", (input: string) => {
  cy.get('[aria-label="' + `${input}` + '"]');
});
