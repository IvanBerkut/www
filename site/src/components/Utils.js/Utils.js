import Big from "big.js";

export const applyDiscount = (price, discount) => {
  if (typeof price !== "number" || typeof discount !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (price < 0 || discount < 0 || discount > 100) {
    throw new Error("Invalid input values");
  }

  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;
  const bigPrice = Big(discountedPrice);
  const result = bigPrice.round(2).toFixed(2);

  return result;
};
