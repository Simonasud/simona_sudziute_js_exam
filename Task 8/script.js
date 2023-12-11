"use strict";
console.log("script.js file was loaded");

/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error("Error: Division by zero is undefined.");
      return NaN;
    }
  }
}

const calc = new Calculator();

console.log(calc.sum(5, 3));
console.log(calc.subtraction(7, 2));
console.log(calc.multiplication(4, 6));
console.log(calc.division(10, 2));
console.log(calc.division(8, 0));
