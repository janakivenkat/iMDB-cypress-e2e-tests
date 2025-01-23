export class TopBoxOfficePage {

    /*Function to click on the 2nd item in the top box office list */
    fnClickSecondTopBoxOfficeItem() {
        cy.get('.ipc-title__text').contains('2.').click();
    }

    /*Function to click on the IMDB Rating */
    fnClickIMDbRatingButton() {
        cy.get('[data-testid="hero-rating-bar__aggregate-rating"]')
            .find('[aria-label="View User Ratings"]')
            .eq(0)
            .scrollIntoView()
            .click({ force: true });
    }

    /*Function to set 5 star rating*/
    fnSetFiveStarsRating() {
        cy.get('.ipc-starbar__rating')
            .find('[aria-label="Rate 5"]')
            .scrollIntoView()
            .click({ force: true });
    }

    /*Function to submit the rating */
    fnSubmitRating() {
        cy.get('.ipc-rating-prompt__rating-container')
            .find('[class*="ipc-rating-prompt__rate-button"]')
            .should('have.text', 'Rate')
            .should('be.visible')
            .click();
    }

    /*Function to verify the sign in page is displayed*/
    fnVerifySignInPage() {
        cy.url().should('include', '/registration/signin');
    }
}