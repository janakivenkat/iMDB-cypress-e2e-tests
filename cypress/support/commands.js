// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// support/index.js or support/commands.js

// Global setup and teardown for all tests

beforeEach(() => {
  // You can reset any state or clear localStorage, cookies, etc.
  // For example, to reset the local storage or cookies:
  cy.clearLocalStorage();  // Clear localStorage before each test
  cy.clearCookies(); // Clear cookies before each test
  // cypress/support/commands.js
});

afterEach(() => {
  // Clear state after each test
  cy.clearLocalStorage();
  cy.clearCookies();
});

Cypress.Commands.add('takeScreenshot', (screenshotName) => {
  // Log a message to console (optional)
  cy.log(`Taking screenshot: ${screenshotName}`);

  // Take screenshot with a custom name
  cy.screenshot(screenshotName, {
    capture: 'viewport' // This will capture only the viewport, not the entire page
  });
});
