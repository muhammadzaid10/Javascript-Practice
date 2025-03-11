let table = prompt("Enter Your Table number");
let start = prompt("Enter Your Starting number");
let end = prompt("Enter Your Ending number");
for (let i = start; i <= end; i++) {
  let result = table * i;
  console.log(`${table}x${i}=${result}`);
}
if (end >= start) {
  alert("(Error) Your Ending Point is Lower than Starting Point");
}
