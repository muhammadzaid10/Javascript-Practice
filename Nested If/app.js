let bank = prompt(
  "1) Checking Bank Blance \n 2) Deposit Bank Balance \n 3) Withdraw Bank Balnce"
);
let balance = 10000;
if (bank == 1) {
  alert(`Your Balance Account ${balance}`);
} else if (bank != 1 && bank != 2 && bank != 3) {
  alert("Invalid option! Please enter 1, 2, or 3.");
} else if (bank == 2) {
  let deposit = +prompt("Enter The Deposit Amount");
  if (deposit > 0) {
    balance += deposit;
    alert(`Your Account Deposit is ${balance} Successfully`);
  } else {
    alert("Invalid deposit amount");
  }
} else if (bank == 3) {
  let Withdraw = +prompt(`Enter The Withdraw Amount`);
  if (Withdraw > 0 && Withdraw <= balance) {
    let With = balance - Withdraw;
    alert(
      `Your Withdraw is ${Withdraw} Successfully \n Your Remaining Balance is ${With}`
    );
  } else if (Withdraw > balance) {
    alert("Insufficient balance!");
  } else if (Withdraw < 1) {
    alert("Insufficient balance!");
  }
}
