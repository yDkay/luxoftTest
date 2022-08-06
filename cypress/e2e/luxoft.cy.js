/// <reference types="cypress" />

describe("Test Task", () => {
  let timeout = 0;
  it("passes", () => {
    // Navigate to  https://www.aviasales.com/
    cy.visit("https://www.aviasales.com/");
    cy.url().should("include", "aviasales");
    // cy.get('[data-test-id="switch"]').click();
    // Alternative using custom command
    // Enable Night Theme
    cy.dataTestId("switch").click().wait(timeout);
    // cy.get("#origin").clear().type("John F. Kennedy International Airport");
    // Alternative using auto-complete field
    // For FROM field set NEW York, Kennedy airport
    cy.get("#origin")
      .clear()
      .type("JFK")
      .get("#origin-item-0")
      .click()
      .wait(timeout);
    //For TO field set Berlin
    cy.get("#destination").type("Berlin").wait(timeout);
    // For DATE field set August, 30
    cy.ariaLabel("Tue Aug 30 2022").click().wait(timeout);
    // No returning ticket
    cy.dataTestId("no-return-ticket").click().wait(timeout);
    // Passengers – 2 (Since it was not informed what type of passenger (Adult, Children or Intatils) nor class, i selected 2 adults in Business class)
    cy.dataTestId("passengers-field").click().wait(timeout);
    cy.dataTestId("passengers-adults-field").wait(timeout);
    cy.dataTestId("tooltip-wrapper").eq(1).click().wait(timeout);
    cy.dataTestId("tripclass-business-label").click().wait(timeout);
    /* Since cypress cant work with extra child tabs due to securing that flaky tests dont occur, for us to garantee that 
    the page will load correctly, we need to dissable the target='_blank' class from the data-test-id="avia_form" element */
    cy.dataTestId("checkbox-booking").click().wait(timeout); //The uncheck() function would not work with this element
    cy.dataTestId("avia_form").invoke("removeAttr", "target").wait(timeout);
    // Click search flight (flight was already selected)
    cy.dataTestId("form-submit").click().wait(timeout);

    // Assert that all previous data is displayed on the new page
    cy.dataTestId("origin-autocomplete-field")
      .should("have.value", "New York")
      .wait(timeout);
    cy.dataTestId("destination-autocomplete-field")
      .should("have.value", "Berlin")
      .wait(timeout);
    cy.dataTestId("departure-date-field")
      .children()
      .should("have.value", "Tue, August 30")
      .wait(timeout);
    cy.dataTestId("return-date-field")
      .children()
      .should("be.empty")
      .wait(timeout);
    cy.dataTestId("passengers-field")
      .children()
      .should("contain.text", "2 passengers")
      .should("contain.text", "business")
      .wait(timeout);

    // Assert that the new page was displaying the cheapest option available
    cy.get(".app__content")
      .contains("Cheapest")
      .should("be.visible")
      .wait(timeout);
  });
});
