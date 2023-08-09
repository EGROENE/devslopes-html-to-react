In this assignment from my coaching program, Devslopes, it is my task to convert existing HTML code to React.js code, achieving the same, original results. I made only minimal changes to the TypeScript, HTML, and CSS, as the main purpose of this assignment is to make the overall code more efficient by using React.  

It included practice regarding:
* setting up a React project with Vite
* creating & implementing stateless Functional & Class components that use props
* writing clean React code (understanding and fixing errors thrown by a eslint & by the browser)
* importing & exporting data between documents
* manipulating data in JavaScript Arrays & Objects
* conditional rendering
* styling elements in React components

# React Debt-Free Calculator
This is a project I completed for the Devslopes Academy, and is my first-ever React project. I was tasked with building a debt-free calculator. Here's how it works:
* There are three input fields, in which the user enters the Debt Principal, the Interest Rate, & the amount they would like to pay
* Interest Owed is calculated anew with each payment made; it is calculated as follows: Current Principal * Interest Rate / 100 / 12
* Since money is being handled, the three input fields are numbers & all calculated values are rounded to two decimal places. The fields pertaining to the Debt Principal & the payment amount accept decimals to the hundredths decimal place. The Debt Principal field is set to a minimum value of 1, the Interest Rate field is set to a minimum value of 0, & the payment field is set to a minimum value of the following calculation if the Total Balance is greater than or equal to 100: (Current Principal / 100) + Interest Rate / 100 / 12. If the Total Balance is less than 100, then the minimum & maximum values are set to the Total Balance.
