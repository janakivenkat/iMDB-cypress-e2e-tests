/**********************************************************************
Name of test : imdb_steps_nicolas_cage.js
Description : Search for Nicolas Cage and click on completed tag under credits
Validation : To click on first completed tag if present
Created By : Janaki Venkatesh 19-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { ImdbPage } from '../pageObjects/imdbPage';
const imdbPage = new ImdbPage();

When('I search for {string}', (strPersonName) => {
  imdbPage.fnSearchForPerson(strPersonName);
});

When('I go to the profile of {string}', (strPersonName) => {
  imdbPage.fnNavigateToSection(strPersonName);
});

When('I unfold the Upcoming tab in the Credits section', () => {
  imdbPage.fnGoToUpcomingTab();
});

Then('I click on the first movie with a {string} tag', (strTag) => {
  imdbPage.fnVerifyAndClickCompletedMovie(strTag);
});