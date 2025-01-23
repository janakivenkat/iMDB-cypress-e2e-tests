Feature: IMDb - Search for Celebrities born yesterday

        Scenario: Navigate to Born Today, delete search, unfold Birthday section, search for Celebrities born yesterday, click on the 3rd celebrity, and take a screenshot
            Given I am on the IMDb homepage
             When I unfold the "Menu"
              And I navigate to the "Born Today" section under "Celebs"
              And I delete the default search
              And I unfold the "Birthday" section
              And I search for Celebrities born yesterday
              And I click on the 3rd celebrity in the list
             Then I should take a screenshot of the celebrity details