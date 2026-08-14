# Currency Converter

A simple web-based currency converter built with HTML, CSS, and JavaScript. The application allows users to select a source currency, select a target currency, enter an amount, and get the converted value using exchange rates fetched from an external API.

## Overview

preview : https://currency-converter-web-ten.vercel.app/

This project was built to practice working with JavaScript, DOM manipulation, user input, and external APIs.

The currency list is fetched from the Currency API and used to populate both currency dropdowns dynamically. When the user clicks the Convert button, the application fetches the exchange rates for the selected source currency and uses the selected target currency to retrieve the required exchange rate.

The final amount is calculated using:

Converted Amount = Entered Amount × Exchange Rate

## Features

- Dynamic currency dropdowns
- Currency data fetched from an external API
- Conversion between different currencies
- User-defined conversion amount
- Input validation
- Dynamic result display
- Responsive user interface
- Error handling for missing currency selections

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Async/Await
- DOM Manipulation

## API

This project uses the Fawaz Ahmed Currency API to retrieve currency data and exchange rates.

## How It Works

When the application loads, it fetches the available currencies from the API and dynamically creates <option> elements for the From and To dropdowns.

## Project Structure

    currency-converter/
    |
    +-- index.html
    +-- about.html
    +-- style.css
    +-- app.js
    +-- README.md

## Getting Started

To run the project locally:

1. Clone the repository:

       git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate into the project directory:

       cd currency-converter

3. Open the project in VS Code.

4. Open index.html in your browser, or use the Live Server extension in VS Code.

## Validation

The application checks whether both currencies have been selected before making an API request.

If either currency is missing, the user receives an appropriate message instead of sending an invalid API request.

## What I Learned

This project helped me understand and practice:

- Working with the DOM
- Creating elements dynamically
- Handling <select> and <option> elements
- Reading values from form inputs
- Event listeners
- Fetching data from an API
- Working with JSON
- Using async and await
- Accessing nested JavaScript objects
- Using dynamic object properties
- Converting input values from strings to numbers
- Basic input validation
- Displaying data dynamically on a webpage

## Future Improvements

Some improvements I may add in the future include:

- Currency swap functionality
- Currency symbols and country flags
- Loading states while fetching exchange rates
- Better error handling for API failures
- Conversion history
- Dark mode
- Improved mobile responsiveness

## Author

Hassan Noman

## Acknowledgements

Currency data provided by:

Fawaz Ahmed's Currency API
https://github.com/fawazahmed0/exchange-api
