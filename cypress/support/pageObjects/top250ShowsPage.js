export class TopShowsPage {
   
    /*Function to navigate to Photos section  */
    fnGoToPhotosSection() {
        cy.get('.ipc-title__text')
            .contains('Photos')
            .should('exist')
            .scrollIntoView()
            .click();
    }

    /*Function to filter the photos with danny trejo pictures */
    fnFilterDannyTrejoPhotos(strCelebName) {
        let optionValue = '';
        cy.get('[data-testid="mv-gallery-button"]').should('exist').click();
        cy.get('[data-testid="image-chip-dropdown-test-id"]').should('exist').click();
        cy.get('[data-testid="chip-container-title-test-id"]').should('be.visible');
        cy.get('#Person-filter-select-dropdown')
            .find('option')  // Find all the option elements within the select dropdown
            .each(($el) => {
                // Get the text of the option and match it with the desired name
                const optionText = $el.text();

                if (optionText.includes(strCelebName)) {
                    // If the option text matches 'celebrity name', get and log the value
                    optionValue = $el.val();
                    cy.log(optionValue); 
                    cy.wrap(optionValue).as('fetchedOptionValue');
                    cy.get('#Person-filter-select-dropdown').select(optionValue);
                }
            });
        //verify celebrity name is selected
        
        cy.get('@fetchedOptionValue').then((value) => {
            cy.log(value);
            cy.get(`[data-testid^="filter-menu-chip-${value}"]`)
                .should('contain', strCelebName)
                .should('have.attr', 'aria-pressed', 'true');
            //close the pop up and view the photo
            cy.get('[data-testid="promptable__x"]').should('exist').click();
            cy.get('[data-testid="promptable__pc"]').should('not.exist');
            //verify url change to check if page is refreshed
            cy.url().should('include', 'Names=' + value);
            //photos should be displayed
            cy.get('[data-testid="section-images"]').should('exist');
        });
    }

    /*Function to click on the second image */
    fnClickSecondPhoto() {
        cy.get('[data-testid$="-img-1"]')
            .should('be.visible')
            .click();
        cy.get('[data-testid="media-viewer"]').should('be.visible');
    }
}