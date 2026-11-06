"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(price, quantity) {
    const total = price * quantity;
    console.log("Total:", total);
    return total;
}
function getUserName(user) {
    return user.name;
}
function divide(a, b) {
    return a / b;
}
calculateTotal(100, 2);
getUserName({ name: "Avinash" });
divide(10, 0);
//# sourceMappingURL=app.js.map