# Communication-in-AACtion
Repository for Communication in AACtion website   
## User Stories
https://docs.google.com/spreadsheets/d/1LX6Rhro9DjCI5u8VajkTOQE8cOwPgtxfwo_S61p1JPw/edit?usp=sharing 
## Design and UI  
https://docs.google.com/document/d/1H7uLBOrh8Q7xQtmfXGPnv_wTvuAGXyN1mW2BoeDf7N4/edit?usp=sharing  
## Testing Coverage
See `./website/src/testingCoverage.txt` for our updated coverage report.
To run our tests, use the command `npm test -- --coverage`.
The main issue we are dealing with in terms of testing is <Link> components. Currently, our test for the SignUp page fails, citing problems with the <Link> components, which is why coverage for that file is low. We also are still trying to fully figure out our database connection with the front end. Since this is not yet working correctly, the tests for the DB Models all fail.

## How to Run
To run our website, use the `npm start` command. Navigate to other pages using the navbar at the top. If the page has not been created yet then you will just be returned to the landing page.
