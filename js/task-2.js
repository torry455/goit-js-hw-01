function getShippingMessage(country, price, delieveryFee) {
    let totalPrice = price + delieveryFee;

    const msg = `Shipping to ${country} will cost ${totalPrice} credits`;

    return msg;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));