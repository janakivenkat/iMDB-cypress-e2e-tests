/**********************************************************************
Name of test : imdb_steps_top250tvshows.js
Description : Navigate to top 250 shows and look for danny trejos picture from the Breaking Bad show
Validation : To click on 2nd picture of Danny Trejo
Created By : Janaki Venkatesh 20-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { TopShowsPage } from '../pageObjects/top250ShowsPage';
import { ImdbPage } from '../pageObjects/imdbPage';

const imdbPage = new ImdbPage();
const topShowsPage = new TopShowsPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent the error from failing the test
  if (err.message.includes('Script error')) {
    return false;
  }
  // Allow other errors to fail the test
});

When('I click on {string}', (strShow) => {
  imdbPage.fnNavigateToSection(strShow);
});

When('I go to the Photos section', () => {
  topShowsPage.fnGoToPhotosSection();
});

When('I filter by {string} photos', (strCelebName) => {
  topShowsPage.fnFilterDannyTrejoPhotos(strCelebName);
});

Then('I click on the 2nd photo in the list', () => {
  topShowsPage.fnClickSecondPhoto();
  cy.takeScreenshot('Danny Trejo 2nd pic');
});