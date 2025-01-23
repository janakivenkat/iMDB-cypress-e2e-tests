export class BornTodayPage {

    /*Function to fetch the current date from a text 'Birthday: 01-21' */
    fnFetchTheDate() {
        cy.get('[data-testid^="selected-input-chip-list-birthday-"]')  // Select the element
            .should('exist')
            .invoke('text')  // Get the text content of the element
            .then((text) => {
                const datePart = text.split(':')[1].trim();
                cy.wrap(datePart).as('birthdayDate');
            });
    }

    /*Function to delete the default search date that appears in the page */
    fnDeleteDefaultSearch() {
        cy.get('[data-testid^="selected-input-chip-list-birthday-"]').should('exist').click();
    }

    /*Function to set the birthdate field with yesterday date  */
    fnSearchCelebritiesBornYesterday() {
        cy.get('@birthdayDate').then((birthdayDate) => {
            const dateParts = birthdayDate.split('-');
            const month = parseInt(dateParts[0], 10); // Extract month
            const day = parseInt(dateParts[1], 10);   // Extract day

            // Step 2: Use the current year for the new Date object
            const currentYear = new Date().getFullYear(); // Get the current year

            // Step 3: Create a Date object using the current year, month, and day
            const date = new Date(currentYear, month - 1, day); // Month is 0-based

            // Step 4: Subtract one day from the date
            date.setDate(date.getDate() - 1);

            // Step 5: Format the previous date as MM-DD
            const prevMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1
            const prevDay = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary

            // Return the previous date in MM-DD format
            const previousDate = `${prevMonth}-${prevDay}`;
            //enter the date in birthday field
            cy.get('[data-testid="birthday-input-test-id"]')
                .should('exist')
                .type(previousDate)
                .type('{enter}');
            cy.get('[data-testid="adv-search-get-results"]')
                .should('exist')
                .scrollIntoView().click(); // Submit the search
            //verify if the filter for previous date appears
            cy.get('[data-testid^="selected-input-chip-list-birthday-"]')
                .should('exist')
                .contains(previousDate);
        });
    }

    /*Function to click on the 3rd celebrity that appears in the born yesterday list */
    fnClickThirdCelebrity() {
        cy.get('.ipc-title-link-wrapper').should('exist').eq(2).click(); // Click on the third celebrity in the list
    }

    /*Function to set the birthday with an year 40 years ago */
    fnSearchCelebritiesBorn40YearsAgo() {
        const today = new Date();
        const year = today.getFullYear() - 40; // Get the year 40 years ago
        const prevMonth = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1

        // Return the previous date in MM-DD format
        const previousMonthYear = `${year}-${prevMonth}`;

        cy.get('[data-testid="birthYearMonth-start"]')
            .should('exist')
            .type(previousMonthYear)
            .type('{enter}');
        cy.get('[data-testid="birthYearMonth-end"]')
            .should('exist')
            .type(previousMonthYear)
            .type('{enter}');
        cy.get('[data-testid="adv-search-get-results"]')
            .should('exist')
            .scrollIntoView()
            .click(); // Submit the search
    }

    /*Function to click on the first link that appears in the description */
    fnClickFirstLinkInDescription() {
        cy.get('.ipc-html-content-inner-div')
            .should('exist') // Select all celebrity elements
            .first()
            .then(($text) => {
                if ($text.find('a').length > 0) {
                    cy.log('A link is present in the text');
                    cy.get('.ipc-html-content-inner-div')
                        .first()
                        .find('a')
                        .first()
                        .click();
                    cy.takeScreenshot('celebrity first link details')
                } else {
                    cy.log('No link found in the text');
                }
            });
    }
}