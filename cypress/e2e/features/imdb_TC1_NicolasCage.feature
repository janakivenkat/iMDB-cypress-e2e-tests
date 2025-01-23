Feature: IMDb - Search and access Nicolas Cage profile

        Scenario: Search for Nicolas Cage and access his profile, unfold the Upcoming tab and click on a Completed movie
            Given I am on the IMDb homepage
             When I search for "Nicolas Cage"
              And I go to the profile of "Nicolas Cage"
              And I unfold the Upcoming tab in the Credits section
             Then I click on the first movie with a "Completed" tag