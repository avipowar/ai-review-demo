function calculateTotal(price: number, quantity: number) {
  const total = price * quantity;

  console.log("Total:", total);

  return total;
}

function getUserName(user: any) {
  return user.profile.name.toUpperCase();
}

function divide(a: number, b: number) {
  return a / b;
}

function getDiscount(price: number) {
  return price - 100;
}

function getAge(age: number) {
  if (age > 18) {
    return "Adult";
  }

  return "Minor";
}

function getUserDiscount(age: number) {
  if (age > 18) {
    return 20;
  }

  return 0;
}

console.log(getUserDiscount(18));

getAge(65);

calculateTotal(100, 2);
getUserName({ name: "Avinash" });
divide(10, 0);
