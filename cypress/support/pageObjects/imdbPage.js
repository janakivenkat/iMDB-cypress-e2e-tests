export class ImdbPage {

  /*Function to navigate to imdb home page  */
  fnNavigateToHomePage() {
    cy.visit('/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    })

    // Ensure the consent pop-up is visible
    cy.get('[data-testid="consent-banner"]', { timeout: 10000 }).should('be.visible');
    // Click the accept button
    cy.get('[data-testid="accept-button"]').should('be.visible').click();
    // verify that consent pop up doesnt exist
    cy.get('[data-testid="consent-banner"]').should('not.exist');
  }

  /*Function to navigate to a particular section */
  fnNavigateToSection(strSection) {
    cy.contains(strSection).should('exist').click();
  }

  /*Function to search for a person name  */
  fnSearchForPerson(personName) {
    cy.get('[id="suggestion-search"]').should('exist').type(personName);
    cy.get('button[type="submit"]').should('exist').click();
  }

  /*Function to unfold upcoming section in credits section */
  fnGoToUpcomingTab() {
    cy.get('[data-testid$="-upcoming-projects"]')
      .should('exist')
      .each(($tab) => {
        cy.wrap($tab).click(); // Click to unfold
      });
  }

  /*Function to verify and click on the 1st completed tag movie  */
  fnVerifyAndClickCompletedMovie(movieTag) {
    cy.get('.ipc-metadata-list-summary-item__tc')
      .should('exist')
      .find('ul')
      .find('a')  // Credit items in the "Upcoming" tab
      .each(($el) => {
        // Check if it contains a "Completed" tag
        if ($el.text().includes(movieTag)) {
          cy.wrap($el).scrollIntoView().click();
          return false; // Click on the first movie with "Completed"
        } else {
          cy.log(`No movie with the "${movieTag}" tag found.`);
          //you can fail the test case if needed or skip it
          //cy.fail(`No movie with the "${movieTag}" tag was found.`);
          // verify credits section is still visible to continue the test
          cy.get('[data-testid="nm_flmg_sec"]').should('be.visible');
        }
      });
  }
}  