# Book Search

This application allows you to search for books. The application uses the [Google Books API](https://developers.google.com/books/docs/overview). It has the following features:
* Type in a query and display a list of books matching that query.
* Each item in the list includes the book's author, title, and publishing company, as well as a picture of the book if available.
* From each list item, you could navigate to more information about the book.

## Getting Started
- `git clone https://github.com/ra-g/books` to clone the repo
- `npm install` to install all required dependencies
- `npm start` to start the local server

## Running the tests
- `npm test` 

## Application Structure
- `app.js` - The entry point to the application and the route definitions.
- `views/` - The webpages of the application.
- `test/` - The tests of the application.

### Validation
Performing validation on the results of a query that are received:
- A message will be displayed to the user if a query does not return any results.
- A result that does not contain a picture property displays a message in place of the picture.

## Notes
- The application uses the instructions found in the API [documentation](https://developers.google.com/books/docs/v1/using). Search sends an HTTP GET request to the specified URI.
- The application runs on port 8080 locally.