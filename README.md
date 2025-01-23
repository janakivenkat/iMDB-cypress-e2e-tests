
## IMDB FE E2E CYPRESS TESTS

This project contains various functionalities under menu options for the application https://www.imdb.com/

## Description

Using Cypress, we will create a test automation framework with the following features:

The Page Object Model pattern
BDD (Cucumber) support
Multi-environment and multi-browser testing support
Create reports that include videos and screenshots

## Project Overview
  
The tests cover the following test cases:
- **Search Functionality**: Test that search for a celebrity name and look for completed movie tags.
- **Rate Movie Functionality**: Test to rate a movie with 5 star.
- **TVShows Functionality**: Test to select a show and view for celebrity photos.
- **Born Today Birthdate Functionality**: Test to view celebrities born yesterday.
- **Born Today Birthday Functionality**: Test to view celebrities born 40 years ago.

## Pre-requisites

Before running the tests, make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
             - During installation make sure you select npm manager checkbox option and install node.js
             - Check if environment variables are added in the system path 
             - Now restart the cmd prompt and try the below commands.
             - node -v
             - npm -v
             - You should get appropriate version numbers probably the latest node (v20.18.0) and npm(10.8.2)

- **Cypress**: Installed as a dev dependency in this project.
             - Make use of command npm install cypress --save-dev
             - After successful installation , try opening the cypress using command npx cypress open 
             - Create your first spec.cy.js file.
             - You can execute the test using the command npx cypress run in headless mode

## Installation

1. Clone the repository:

```bash
git clone https://github.com/janakivenkat/iMDB-cypress-e2e-tests.git
```

2. Navigate to the project directory:

```bash
cd iMDB-cypress-e2e-tests
```

3. Install the dependencies:

```bash
npm install
```

## Running Tests

To open the Cypress Test Runner, use the following command:

```bash
npx cypress open
```

This will launch the Cypress UI, where you can run individual test files.

Alternatively, you can run all tests headlessly with:

```bash
npx cypress run
```
To run a specific test in headless mode in a specific browser(chrome or firefox), use the below.

```bash
npx cypress run --spec "cypress/e2e/features/imdb_TC1_NicolasCage.feature" --headed --browser chrome
```

## Folder Structure

```
/cypress
  /e2e
    /features
    - imdb_TC1_NicolasCage.feature     // search for nicolas cage and click completed movie tag if any
    - imdb_TC2_Rate_Movie.feature      // Rate the movie with 5 star
    - imdb_TC3_Top250TVShows.feature   // Click on a tv show and verify celebrity photos
    - imdb_TC4_BornTodayBirthday.feature  // Set birthday with yesterday date and search for celebrity 
    - imdb_TC5_BornTodayBirthdate.feature  // Set birthdate with date 40 years ago and click on link in description of celebrity

  /support
    /pageObjects
    - bornTodayPage.js         // Objects and functions in borntoday section page
    - imdbPage.js        // Objects and fucntions in the home page
    - top250ShowsPage.js           // Objects and functions in the top 250 tv shows page
    - topBoxOfficePage.js          // Objects and functions in the top box office page

    /step_definitions
    - imdb_commonSteps.js    // common step definition files used for other test
    - imdb_steps_birthdate.js  // step definition file for born today birthdate test 
    - imdb_steps_birthday.js  // step definition file for born today birthday test
    - imdb_steps_rate_movie.js  // step definition file for rate movie test
    - imdb_steps_top250tvshows.js  // step definition file for top 250 shows test
  - commands.js         // Custom Cypress commands
  - e2e.js            // Global configurations
```