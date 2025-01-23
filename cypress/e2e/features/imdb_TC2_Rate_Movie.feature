Feature: IMDb Top Box Office Movie Rating

        Scenario: Navigate to IMDb Top Box Office and rate a movie
            Given I am on the IMDb homepage
             When I unfold the "Menu"
              And I navigate to the "Top Box Office" section under "Movies"
              And I click on the 2nd item in the Top Box Office list
              And I click on the IMDb Rating button
              And I click on the "Rate" button
              And I set a 5 stars rating
              And I click the Rate button in the modal
             Then I should land in the registration or signin page