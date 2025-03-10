let array = ["Zaid", "Hassan", "Usaid"];

// array

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// pop & push

array.push("Aslam");
console.log(array);
array.pop();
console.log(array);

// unshift & shift

array.unshift("Majeed");
console.log(array);
array.shift();
console.log(array);

// slice

console.log(array.slice(0, 2));

// splice

array.splice(1, 2, "aslam");
console.log(array);

// loop increment

// for (let index = 0; index <= 100; index++) {
//   console.log(index);
// }

// loop decrement

for (let index = 0; index >= 100; index--) {
  console.log(index);
}

// center undefine

array[10] = "asslam";
console.log(array);
