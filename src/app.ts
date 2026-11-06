function calculateTotal(price: number, quantity: number) {
  const total = price * quantity;

  console.log("Total:", total);

  return total;
}

function getUserName(user: any) {
  return user.name;
}

function divide(a: number, b: number) {
  return a / b;
}

calculateTotal(100, 2);
getUserName({ name: "Avinash" });
divide(10, 0);
