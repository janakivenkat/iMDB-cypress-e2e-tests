/**********************************************************************
Name of test : imdb_steps_rate_movie.js
Description : Navigate to IMDb Top Box Office and rate a movie with 5 star
Validation : To rate the movie
Created By : Janaki Venkatesh 19-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { TopBoxOfficePage } from '../pageObjects/topBoxOfficePage';
import { ImdbPage } from '../pageObjects/imdbPage';

const imdbPage = new ImdbPage();
const topBoxOfficePage = new TopBoxOfficePage();

When('I click on the 2nd item in the Top Box Office list', () => {
  topBoxOfficePage.fnClickSecondTopBoxOfficeItem();  
});

When('I click on the IMDb Rating button', () => {
  topBoxOfficePage.fnClickIMDbRatingButton();
});

When('I click on the {string} button', (strRate) => {
  imdbPage.fnNavigateToSection(strRate);
});

When('I set a 5 stars rating', () => {
  topBoxOfficePage.fnSetFiveStarsRating();
});

When('I click the Rate button in the modal', () => {
  topBoxOfficePage.fnSubmitRating();
});

Then('I should land in the registration or signin page', () => {
  topBoxOfficePage.fnVerifySignInPage();
});