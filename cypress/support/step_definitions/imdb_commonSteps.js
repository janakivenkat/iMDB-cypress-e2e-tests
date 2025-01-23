/**********************************************************************
Name of test : imdb_commonSteps.js
Description : Step file to have common steps for all the features
Validation : To validate common steps 
Created By : Janaki Venkatesh 21-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { ImdbPage } from '../pageObjects/imdbPage';
import { BornTodayPage } from '../pageObjects/bornTodayPage';

const imdbPage = new ImdbPage();
const bornTodayPage = new BornTodayPage();

Given('I am on the IMDb homepage', () => {
  imdbPage.fnNavigateToHomePage();
});

When('I unfold the {string}', (strItem) => {
  imdbPage.fnNavigateToSection(strItem);
});

When('I navigate to the {string} section under {string}', (strSubSection, strMainSection) => {
  imdbPage.fnNavigateToSection(strMainSection);
  imdbPage.fnNavigateToSection(strSubSection);
});

When('I delete the default search', () => {
  bornTodayPage.fnFetchTheDate();
  bornTodayPage.fnDeleteDefaultSearch();
});

When('I unfold the {string} section', (strSection) => {
  imdbPage.fnNavigateToSection(strSection);
});