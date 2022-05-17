# Cat Tinder

- Added repo to project
- Created branch protection

### Frontend Structure
- Added Reactstrap
- Added react-router-dom
- Added mockCats
- Added Header and Footer component
- Added pages with routes
- Styles Header, Footer, NotFound components

### Testing with Jest and Enzyme
  $ git checkout -b test-coverage
  Install enzyme
  $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
  $ yarn test


As a developer, I have test coverage on my Header component.
  - Created a test file for Header, Footer, NotFound, Home
  - Added tests to above files and App.test.js

# RESTful Routes
  - For the data side of the app:
    - index (read / get) - all the cats
    - show (read / get) - one cat - needs an id as a param to show which cat
    - create
    - update
    - delete

  - For the user side of the app:
    - new
    - edit


# Index
  - Updated our route to CatIndex to be dynamic so we can pass props
  - Mapped over this.props.cats in CatIndex to show all the cat's names
  - Added testing for CatIndex to CatIndex.test.js

# Show 
  - Updated route to be dynamic to CatShow
  - Displayed content of cat on CatShow page
  - Added testing for CatShow to CatShow.test.js
