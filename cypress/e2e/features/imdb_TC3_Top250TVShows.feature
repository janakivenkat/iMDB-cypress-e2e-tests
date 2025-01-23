Feature: IMDb - Navigate and view Breaking Bad photos

        Scenario: Go to IMDb.com, navigate to Breaking Bad Danny Trejo's photos, and click on the 2nd photo
            Given I am on the IMDb homepage
             When I unfold the "Menu"
              And I navigate to the "Top 250 TV Shows" section under "TV Shows"
              And I click on "Breaking Bad"
              And I go to the Photos section
              And I filter by "Danny Trejo" photos
             Then I click on the 2nd photo in the list