alert("Welcome to Pizza Max");
let MenuCard = +prompt(" 1) Pizza \n 2) Zinger Burger \n 3) French Fries");
if (MenuCard == 1) {
  let Pizza = +prompt(
    " 1) Greek pizza =/1200 Rs \n 2) Chicago pizza =/1500 Rs \n 3) Hawaiian pizza =/2000 Rs"
  );
  if (Pizza != 1 && Pizza != 2 && Pizza != 3) {
    alert("Invalid option! Please enter 1, 2, or 3.");
  }
  let Quantity = +prompt("Enter The Order Quantity!");
  let Greekpizza = 1200;
  let Chicagopizza = 1500;
  let Hawaiianpizza = 2000;
  if (Pizza == 1) {
    let GreekPizza = Quantity * Greekpizza;
    alert(`Look the Your Order Payment! ${GreekPizza}`);
  }
  if (Pizza == 2) {
    let ChicagoPizza = Quantity * Chicagopizza;
    alert(`Look the Your Order Payment! ${ChicagoPizza}`);
  }
  if (Pizza == 3) {
    let HawaiianPizza = Quantity * Hawaiianpizza;
    alert(`Look the Your Order Payment! ${HawaiianPizza}`);
  }
} else if (MenuCard == 2) {
  let Pizza = +prompt(
    " 1) Cheese Burger =/500 Rs \n 2) Spicy Burger =/700 Rs \n 3) Double Cheese Burger =/900 Rs"
  );
  if (Pizza != 1 && Pizza != 2 && Pizza != 3) {
    alert("Invalid option! Please enter 1, 2, or 3.");
  }
  let Quantity = +prompt("Enter The Order Quantity!");
  let Cheeseburger = 500;
  let Spicyburger = 700;
  let Doubleburger = 900;
  if (Pizza == 1) {
    let CheeseBurger = Quantity * Cheeseburger;
    alert(`Look the Your Order Payment! ${CheeseBurger}`);
  }
  if (Pizza == 2) {
    let SpicyBurger = Quantity * Spicyburger;
    alert(`Look the Your Order Payment! ${SpicyBurger}`);
  }
  if (Pizza == 3) {
    let DoubleBurger = Quantity * Doubleburger;
    alert(`Look the Your Order Payment! ${DoubleBurger}`);
  }
} else if (MenuCard == 3) {
  let Pizza = +prompt(
    " 1) Curly fries =/200 Rs \n 2) Cheese fries =/400 Rs \n 3) Garlic fries =/600 Rs"
  );
  if (Pizza != 1 && Pizza != 2 && Pizza != 3) {
    alert("Invalid option! Please enter 1, 2, or 3.");
  }
  let Quantity = +prompt("Enter The Order Quantity!");
  let Curlyfries = 200;
  let Cheesefires = 400;
  let Garlicfires = 600;
  if (Pizza == 1) {
    let CurlyFires = Quantity * Curlyfries;
    alert(`Look the Your Order Payment! ${CurlyFires}`);
  }
  if (Pizza == 2) {
    let CheeseFires = Quantity * Cheesefires;
    alert(`Look the Your Order Payment! ${CheeseFires}`);
  }
  if (Pizza == 3) {
    let GarlicFires = Quantity * Garlicfires;
    alert(`Look the Your Order Payment! ${GarlicFires}`);
  }
} else if (MenuCard != 1 && MenuCard != 2 && MenuCard != 3) {
  alert("Invalid option! Please enter 1, 2, or 3.");
}
