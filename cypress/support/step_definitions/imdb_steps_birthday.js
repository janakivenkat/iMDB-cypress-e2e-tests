/**********************************************************************
Name of test : imdb_steps_birthday.js
Description : Navigate to born today section and click on celebrity born yesterday
Validation : To click on the 3rd celebrity born yesterday using birthday option
Created By : Janaki Venkatesh 21-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BornTodayPage } from '../pageObjects/bornTodayPage';

const bornTodayPage = new BornTodayPage();

When('I search for Celebrities born yesterday', () => {
  bornTodayPage.fnSearchCelebritiesBornYesterday();
});

When('I click on the 3rd celebrity in the list', () => {
  bornTodayPage.fnClickThirdCelebrity();
});

Then('I should take a screenshot of the celebrity details', () => {
  cy.takeScreenshot('celebrity_born_yesterday');
});
