export class TopShowsPage {
   
    /*Function to navigate to Photos section  */
    fnGoToPhotosSection() {
        cy.get('.ipc-title__text').contains('Photos').scrollIntoView().click();
    }

    /*Function to filter the photos with danny trejo pictures */
    fnFilterDannyTrejoPhotos() {
        cy.get('[data-testid="mv-gallery-button"]').click();
        cy.get('[data-testid="image-chip-dropdown-test-id"]').click();
        cy.get('[data-testid="chip-container-title-test-id"]').should('be.visible');
        cy.get('#Person-filter-select-dropdown').select('nm0001803');
        //verify danny trejo is selected
        cy.get('[data-testid^="filter-menu-chip-nm0001803"]')
            .should('contain', 'Danny Trejo')
            .should('have.attr', 'aria-pressed', 'true');
        //close the pop up and view the photo
        cy.get('[data-testid="promptable__x"]').click();
        cy.get('[data-testid="promptable__pc"]').should('not.exist');
        cy.url().should('include', 'Names=nm0001803');
        //photos should be displayed
        cy.get('[data-testid="section-images"]').should('exist');
    }

    /*Function to click on the second image */
    fnClickSecondPhoto() {
        cy.get('[data-testid$="-img-1"]')
            .click();
        cy.takeScreenshot('Danny Trejo 2nd pic');
    }
}