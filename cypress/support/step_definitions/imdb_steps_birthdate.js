/**********************************************************************
Name of test : imdb_steps_birthdate.js
Description : Navigate to born today section and search for celebrities born 40 years ago
Validation : To click on the first link in description of celebrity 
Created By : Janaki Venkatesh 21-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BornTodayPage } from '../pageObjects/bornTodayPage';

const bornTodayPage = new BornTodayPage();

When('I search for Celebrities born the same day as today 40 years ago', () => {
  bornTodayPage.fnSearchCelebritiesBorn40YearsAgo();
});

Then('I click on the first link from the first celebrity description', () => {
  bornTodayPage.fnClickFirstLinkInDescription();
});