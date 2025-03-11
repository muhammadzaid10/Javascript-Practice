// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// answer

// let city = prompt("Enter the City Name")
// if (city != "Karachi"){
//     alert("Not Valid City")
// }
// if (city == "Karachi"){
//     alert("Welcome to City of KaRaChI")
// }
// else{
//     "Welcome !"
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// answer

// let gender = prompt("Enter Your Gender");
// if (gender != "Male" && gender != "Female") {
//   alert("Not Valid");
// } else if (gender == "Male") {
//   alert("Good Morning Sir");
// } else if (gender == "Female") {
//   alert("Good Morning Ma'am");
// }

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// answer

// let traffic = prompt("Enter the Signal Color");
// if (traffic != "Red" && traffic != "Yellow" && traffic != "Green") {
// alert("Not Valid")
// }
// else if (traffic == "Red"){
//     alert("Must Stop!")
// }
// else if (traffic == "Yellow"){
//     alert("Ready to Move!")
// }
// else if (traffic == "Green"){
//     alert("let's Go!")
// }

// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// answer

// let fuel = prompt("Enter the Fuel Qunatity");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car!");
// } else {
//   ("Enough Fuel");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// answer

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False")
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// answer

// document.write("<h1>" + "Marks Sheet" + "</h1>");
// let english = +prompt("Enter your English Subject Number");
// let urdu = +prompt("Enter your Urdu Subject Number");
// let math = +prompt("Enter your Math Subject Number");
// let totalMarks = +prompt("Enter your Total Marks");
// document.write("<h3>" + "Total Marks : " + totalMarks + "<h3/>");
// let obtainedMarks = english + urdu + math;
// document.write("<h3>" + "Obtained Marks : " + obtainedMarks + "<h3/>");
// let per = (obtainedMarks / totalMarks) * 100;
// document.write("<h3>" + "Percentage : " + per + "<h3/>");
// if (per >= 80) {
//   document.write("<h3>" + "Grade : A-one " + "<h3/>");
//   document.write("<h3>" + "Remarks : Excellent" + "<h3/>");
// } else if (per >= 70) {
//   document.write("<h3>" + "Grade : A " + "<h3/>");
//   document.write("<h3>" + "Remarks : Good" + "<h3/>");
// } else if (per >= 60) {
//   document.write("<h3>" + "Grade : B " + "<h3/>");
//   document.write("<h3>" + "Remarks : You need to improve" + "<h3/>");
// } else if (per <= 60) {
//   document.write("<h3>" + "Grade : Fail ! " + "<h3/>");
//   document.write("<h3>" + "Remarks : Sorry" + "<h3/>");
// }

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// answer

// const secret = 7;
// let num = +prompt("Guess the number (1- 10)");
// if (num == secret) {
//   alert("Bingo!");
// }
// else if (num + 1 == secret){
//   alert("Close enough to the correct answer")
// }
// else{
//   alert("Try Again!")
// }

