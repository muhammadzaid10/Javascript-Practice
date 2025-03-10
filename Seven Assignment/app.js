// 1. Age Group Identifier
// Task:
// User se age input lena hai aur uske basis par uska category (Child, Teenager, Adult, ya Senior Citizen) bataani hai.
// Logic:
// • 0 se 12 saal: Child
// • 13 se 19 saal: Teenager
// • 20 se 59 saal: Adult
// • 60 ya us se zyada: Senior Citizen
// • Agar input invalid ho (negative ya non-numeric value), toh "Invalid Input" show karein.
// answer

// let Age = +prompt(`Enter Your Age`);
// if (Age >= 1 && Age <= 12) {
//   alert("Child");
// } else if (Age >= 13 && Age <= 19) {
//   alert("Teenager");
// } else if (Age >= 20 && Age <= 59) {
//   alert("Adult");
// } else if (Age >= 60) {
//   alert("Senior Citizen");
// } else {
//   alert("Invalid");
// }

// 2. Even or Odd Number
// Task:
// User se ek number input lena hai aur check karna hai ke woh even hai ya odd.
// Logic:
// • Agar number ko 2 se divide karne par remainder 0 aaye, toh woh even hai.
// • Agar remainder 1 aaye, toh woh odd hai.
// • Agar user ne invalid ya non-numeric input diya, toh error message show karein.
// answer

// let number = prompt("Enter The Value");
// if (number % 2 == 0) {
//   alert("even");
// } else if (number % 2 == 1) {
//   alert("odd");
// } else {
//   alert("error");
// }

// 3. Positive, Negative, or Zero
// Task:
// User se ek number input lena hai au  r batana hai ke woh positive, negative ya zero hai.
// Logic:
// • Agar number 0 se bara hai, toh woh positive hai.
// • Agar number 0 se chhota hai, toh woh negative hai.
// • Agar number 0 ke barabar hai, toh woh zero hai.
// Answer

// let Number = prompt(`Enter The Value`);
// if (Number > 0) {
//   alert(`Positive`);
// } else if (Number < 0) {
//   alert(`Negative`);
// } else {
//   alert(`Zero`);
// }

// 4. Vowel or Consonant Checker
// Task:
// User se ek letter input lena hai aur batana hai ke woh vowel hai ya consonant.
// Logic:
// • Agar letter 'a', 'e', 'i', 'o', ya 'u' hai, toh woh vowel hai.
// • Agar koi aur alphabet hai (b, c, d, ...z), toh woh consonant hai.
// Answer

// let Vowel = prompt("Enter The Vowel");
// if (
//   Vowel == "a" ||
//   Vowel == "e" ||
//   Vowel == "i" ||
//   Vowel == "o" ||
//   Vowel == "u"
// ) {
//   alert("Vowel");
// } else if ((Vowel == "")) {
//   alert("Consonant");
// }

// 5. Simple Calculator
// Task:
// User se *do numbers aur ek operator (+, -, , /) lena hai aur uske mutabiq calculation perform karna hai.
// Logic:
// • Agar operator '+' hai, toh dono numbers ka sum return karo.
// • Agar operator '-' hai, toh subtraction karo.
// • Agar operator '*' hai, toh multiplication karo.
// • Agar operator '/' hai, toh division karo.
// • Agar user ne division ke waqt denominator 0 diya, toh error message show karein.
// Anwer

// let value1 = +prompt(`Enter The First Value`);
// let value2 = +prompt(`Enter The Second Value`);
// let operator = prompt("Enter The Value (+ , - , * , / )");
// let result;
// if (operator == "+") {
//   result = value1 + value2;
// } else if (operator == "-") {
//   result = value1 - value2;
// } else if (operator == "*") {
//   result = value1 * value2;
// } else if (operator == "/") {
//   result = value1 / value2;
// } else {
//   result = "Invalid Operator";
// }
// document.write(`Result ${result}`);

// 6. Leap Year Checker
// Task:
// User se year input lena hai aur batana hai ke woh leap year hai ya nahi.
// Logic:
// • Agar year 4 se divisible hai aur 100 se nahi divisible hai, toh woh leap year hai.
// • Agar year 400 se divisible hai, toh bhi woh leap year hai.
// • Baaki sab cases mein woh normal year hoga.
// 📌Example:
// • 2024 → Leap Year
// • 2100 → Not a Leap Year
// • 2000 → Leap Year
// Answer

// let LeapYear = prompt("Enter The Leap Year")
// if (LeapYear % 4 == 0 ){
//   document.write(`${LeapYear} Leap Year`)
// }else{
//   document.write("Not a Leap Year")
// }

// 7. Temperature Checker
// Task:
// User se temperature input lena hai aur uske basis par uska weather category batana hai.
// Logic:
// • Agar temperature 30°C ya zyada hai, toh "It's Hot" show karo.
// • Agar temperature 20-29°C hai, toh "It's Warm" show karo.
// • Agar temperature 10-19°C hai, toh "It's Cool" show karo.
// • Agar temperature 10°C se kam hai, toh "It's Cold" show karo.
// Answer

// let Weather = prompt("Enter The Weather");
// if (Weather >= 30) {
//   document.write("It's Hot");
// } else if (Weather >= 20 && Weather <= 29) {
//   document.write("It's Warm");
// } else if (Weather >= 10 && Weather <= 19) {
//   document.write("It's Cool");
// } else if (Weather >= 1 && Weather <= 10) {
//   document.write("It's Cold");
// } else {
//   document.write("Not Found");
// }

// 8. Grade Calculator
// Task:
// User se marks input lena hai aur uske basis par grade (A, B, C, D, Fail) display karna hai.
// Logic:
// • 90 se 100: A Grade
// • 80 se 89: B Grade
// • 70 se 79: C Grade
// • 60 se 69: D Grade
// • 50 se 59: E Grade
// • 0 se 49: Fail
// • Agar user ne invalid number diya, toh "Invalid Input" show karein.
// 📌Example:
// • Marks: 85 → "B Grade"
// • Marks: 40 → "Fail"
// Answer

// let Marks = prompt("Enter The Marks");
// if (Marks >= 90 && Marks <= 100) {
//   alert("A Grade");
// } else if (Marks >= 80 && Marks <= 89) {
//   alert("B Grade");
// } else if (Marks >= 70 && Marks <= 79) {
//   alert("C Grade");
// } else if (Marks >= 60 && Marks <= 69) {
//   alert("D Grade");
// } else if (Marks >= 50 && Marks <= 59) {
//   alert("E Grade");
// } else if (Marks >= 1 && Marks <= 49) {
//   alert("Fail");
// } else {
//   alert("Value Not Found");
// }

// 9. Largest of Three Numbers
// Task:
// User se teen numbers input lena hai aur batana hai ke inme se sabse bara number kaunsa hai.
// Logic:
// • Agar pehla number dusre aur teesre se bara hai, toh woh largest hai.
// • Agar dusra number pehle aur teesre se bara hai, toh woh largest hai.
// • Agar teesra number pehle aur dusre se bara hai, toh woh largest hai.
// • Agar teeno equal hain, toh "All numbers are equal" show karein.
// 📌Example:
// • Numbers: 10, 25, 15 → "Largest number is 25"
// Answer

// let Value1 = prompt("Enter The First Value");
// let Value2 = prompt("Enter The Second Value");
// let Value3 = prompt("Enter The Third Value");
// if (Value1 > Value2 && Value1 > Value3) {
//   alert("Largest Number is " + Value1);
// } else if (Value2 > Value1 && Value2 > Value3) {
//   alert("Largest Number is " + Value2);
// } else if (Value3 > Value1 && Value3 > Value2) {
//   alert("Largest Number is " + Value3);
// } else if (Value1 == Value2 && Value2 == Value3) {
//   alert("equal");
// }


