# Calculator 🧮

A fully functional on-screen calculator built as part of **The Odin Project – Foundations** curriculum.

## Description

This project is a browser-based calculator built using HTML, CSS, and JavaScript.
It performs basic arithmetic operations while carefully managing user input and
application state without using `eval()`.

The calculator mimics the behavior of a real calculator, handling chained
operations, edge cases, and user-friendly error handling.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Addition, subtraction, multiplication, and division
- Chained calculations (e.g. 12 + 7 - 1 = 18)
- Decimal number support (prevents multiple decimals in one number)
- Clear (AC) functionality to reset all state
- Snarky error handling for division by zero
- Prevents invalid operations (e.g. consecutive operators)
- Automatically starts a new calculation after displaying a result
- Rounds long decimal results to prevent display overflow
- Button-based input with proper state management

## How It Works

- The display shows the current expression (e.g. 5 + 2)
- The calculator evaluates only one operation at a time
- Results from previous calculations are reused for chained operations
- User input is validated before any calculation is performed

## Project Status

✅ Complete

## Future Improvements

- Add keyboard support for number and operator input
- Add a backspace button to remove the last entered character
- Improve mobile responsiveness
- Add visual button press animations
- Add support for advanced operations (percent, sign toggle)

## Acknowledgements

This project was built as part of **The Odin Project** Foundations curriculum.
