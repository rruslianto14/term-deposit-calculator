# Term Deposit Calculator

This application calculates and displays the final total balance and interest earned for a term deposit investment. A user is expected to provide the following inputs `Deposit Amount`, `Interest Rate`, `Investment Term` and `Interest Paid` through a simple form on the webpage.

Tooltips have been added to provide users with extra information regarding what each field means and the type of data that can be entered. Frontend form validation has also been used to ensure data types and rules are adheared to.

These fields will be pre-populated (by default) but can be edited by a user. In the event that a user clears a field and leaves it blank, the total balance and interest earned calculation will not be displayed and an error message will appear prompting the user to complete the respective field before the calculation is completed.

## Prerequisites

- npm
- A web browser (with JS enabled)

## Setup

Install dependencies by running

```
  npm install
```

## Usage

```
  npm start
```

## Running tests

```
  npm test
```

## Thought Process

After reading the requirement brief, it was clear to me that some sort of application was needed to calculate the interest earned for a Term Deposit investment.

Originally, I was thinking of creating a frontend which would send inputs to a backend where the the calculation would take place and then send the result back to the frontend. But given that the formula used to calculate interest was standard and not secret business logic, I determined that this calculation could be completed on the frontend, increasing the speed to the user. I felt this was also possible as the calculation was simple and not complex / resource intensive.

Therefore, I decided to make a simple frontend app which takes 4 user inputs and calculates the total balance and interest earned as outputs. I used a combination of `Yup` and `React Hook Form` to create the form and manage the data (which handles user input validation / restrictions and errors), and `Tailwind CSS` and `Chakra UI` to style and build the web app.

## Assumptions

- As we are calculating interest earned for a term deposit using standard, publically available formulas, I did not implement a backend for this application. If the calculation / formula required sensitive business logic or data (e.g. a business' secret formula for calculating a customer's credit rating), a backend would be implemented to securely complete the calculation.
- The total balance and interest earned will be outputted to 2 decimal places. 
- Based off the Bendigo Bank term deposit calculator, for this Term Deposit Calculator app:
  - There is a minimum and maximum `Deposit Amount` of $1,000 and $1,500,000 respectively.
  - There is a minimum and maximum `Interest rate` of 0% and 15% respectively.
  - There is a minimum and maximum `Investment Term` of 1 month and 5 years respectively.
- User input validation was implemented using the above rules and error messages e.g.
  - Fields cannot be left blank otherwise an error message will appear prompting the user to fill out the field.
  - Fields only accept certain data types (e.g. Number for `Deposit Amount`).
- The functions that calculate interest will return the result rounded to 2 decimal places. 
- To calculate the total investment balance and interest earned where the `Interest Paid` was set to `Monthly`, `Quarterly` or `Annually`, the following compound interest formula was used:

```
  A = P (1 + r/n)^nt

  where:
  - A = final amount
  - P = initial principal / initial deposit amount
  - r = interest rate (p.a.)
  - n = number of times interest is paid per time period
  - t = number of time periods elapsed (years)
```

- To calculate the total investment balance and interest earned where the `Interest Paid` was set to `At Maturity`, the following simple interest formula was used:

```
  A = P (1 + rt)

  where:
  - A = final amount
  - P = initial principal / initial deposit amount
  - r = interest rate (p.a.)
  - t = number of time periods elapsed (years)
```
- For simplicity, we are only accepting 'months' as an input for the `Investment Term` as opposed to 'months' and 'years'.
- All proceeds are reinvested into the term deposit for its duration.
- The user is expected to run this program on a web browser with JavaScript enabled.

## Future Improvements

- If the calculation / formula was more complex and involved sensitive business logic, a backend will be implemented to complete the calculations and then send the result back to the frontend.
- Adding the option to accept both 'months' and 'years' for the `Investment Term`.
- Adding e2e integration testing e.g. Cypress.
- Adding a home page or parent page and implementing routing.
- I would have explored other input formats e.g. using a `<Slider>` component to change the `Deposit Amount`, `Interest Rate` or `Investment Term`.
- Adding a visual graph depicting the growth of the investment over time.
- Ensuring that frontend complies with Web accessibility standards.
