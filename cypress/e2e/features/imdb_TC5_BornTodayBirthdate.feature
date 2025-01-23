Feature: IMDb - Search for Celebrities born 40 years ago

        Scenario: Navigate to Born Today, delete search, unfold Birth date section, search for Celebrities born the same day as today 40 years ago, click on the first result, click on the first link in the description, and take a screenshot
            Given I am on the IMDb homepage
             When I unfold the "Menu"
              And I navigate to the "Born Today" section under "Celebs"
              And I delete the default search
              And I unfold the "Birth date" section
              And I search for Celebrities born the same day as today 40 years ago
             Then I click on the first link from the first celebrity description
