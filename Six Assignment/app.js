// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// answer

// let num = 10
// document.write("The value of a is: "+num)

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// answer

// var a = 2,
//   b = 1;
// var result1 = --a ;
// document.write(`a is ${result1}</br>`);
// var result2 = --b + ++b + b--;
// document.write(`b is ${result2}</br>`);
// var result = result1 + result2
// document.write(`result is ${result}`)

// Write a program that takes input a name from user &
// greet the user.
// answer

// let userName =prompt('Enter Your User Name')
// if (userName) {
//     document.write `Hello, ${userName}! Welcome! 😊`;
// } else {
//     document.write = "Hello, Guest! Welcome! 😊";
// }

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// answer

// let num = prompt("Enter a number:", "5")
// document.write(`${num} x 1 = ${num * 1} <br>`);
// document.write(`${num} x 2 = ${num * 2} <br>`);
// document.write(`${num} x 3 = ${num * 3} <br>`);
// document.write(`${num} x 4 = ${num * 4} <br>`);
// document.write(`${num} x 5 = ${num * 5} <br>`);
// document.write(`${num} x 6 = ${num * 6} <br>`);
// document.write(`${num} x 7 = ${num * 7} <br>`);
// document.write(`${num} x 8 = ${num * 8} <br>`);
// document.write(`${num} x 9 = ${num * 9} <br>`);
// document.write(`${num} x 10 = ${num * 10} <br>`);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// answer

// let English = 54;
// let Urdu = 54;
// let Math = 48;
// const Total = 100;
// let TolObtPer = English + Urdu + Math;
// let TolPosMark = Total * 3;
// let percentage = (TolObtPer / TolPosMark) * 100;

// document.write(`English ${English} <br>`)
// document.write(`Urdu ${Urdu} <br>`)
// document.write(`Math ${Math} <br>`)
// document.write(`Total ${Total} <br>`)
// document.write(`Obtained Marks ${TolObtPer} <br>`)
// document.write(`percentage ${percentage} <br>`)
