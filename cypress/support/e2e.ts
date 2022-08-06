import "./commands.ts";

declare global {
  namespace Cypress {
    interface Chainable {
      dataTestId(value: string): any;
      ariaLabel(value: string): any;
    }
  }
}
