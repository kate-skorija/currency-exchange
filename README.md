# Currency Exchange

#### Asynchrony and API Code Review Exercise for Epicodus, 07.02.2020

### By Kate Skorija

## Description

This is a currency exchanger website. It calls on an exchange rate API to ensure the user recieves the most recent exchange rate available. 

## Specifications

**Behavior**: Program will allow users to enter an amount in USD
  * Input: 132
  * Output: Program takes in $132 USD as input

**Behavior**: Program will allow users to specify another currency to convert the USD amount
  * Input: User selects the Mexican Peso
  * Output: Program accounts for user selection

**Behavior**: Program will call the exchange rate API to ensure the currency exchange rate is correct
 * Input: Program calls API
 * Output: Correct amount based on exchange rate

**Behavior**: Program will convert USD amount into specified currency amount
  * Input: 132.00 USD
  * Output: 2981.37 MXN

## Setup/Installation Requirements

Software Requirements:

1.  Internet browser

2.  A code editor, such as Visual Studio Code, to view or edit the code base

To Open:

1.  Navigate to the [currency-exchange respository](https://github.com/kate-skorija/currency-exchange) or open your terminal

2. Clone this project using the GitHub button or the command:
`$ git clone https://github.com/kate-skorija/pizza-parlor.git`

3. Navigate to the `currency-exchange` directory in your editor of choice, or use [Visual Studio Code](https://code.visualstudio.com/)

4. Create a .env file in the root directory of your cloned project. This is where you will store your personal API key. The .env file has already been added to the .gitignore file of this repository.

5. Navigate to the [exchange rate API](https://www.exchangerate-api.com/)

6. Create a free account to get a free API key.

7. Copy and paste your personal API key to store it in your .env file. Example: API_KEY = YOUR UNIQUE API KEY GOES HERE.

8. Once your API key is set up, enter `$ npm install` in your terminal to install all webpack plugins; enter `$ npm run start` to see the project in the browser.

## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

If there are any issues or questions, please reach out to me through [my GitHub account](https://github.com/kate-skorija). 

## Technologies Used

*  [Visual Studio Code](https://code.visualstudio.com/)
*  [Markdown](https://daringfireball.net/projects/markdown/)
*  [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
*  [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS)
*  [Bootstrap](https://developer.mozilla.org/en-US/docs/Glossary/Bootstrap)
*  [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*  [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)
*  [Webpack](https://webpack.js.org/)
*  [Jest](https://jestjs.io/en/)

### License

*This project uses the following license: [MIT](https://opensource.org/licenses/MIT)*

Copyright (c) 2020 **_Kate Skorija_**