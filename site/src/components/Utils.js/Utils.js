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

export const sortOptions = [
  { label: "Default", option: "default" },
  { label: "Price: Low to High", option: "price", order: "asc" },
  { label: "Price: High to Low", option: "price", order: "desc" },
  { label: "Discount: Low to High", option: "discount", order: "asc" },
  { label: "Discount: High to Low", option: "discount", order: "desc" },
  {
    label: "Discounted Price: Low to High",
    option: "discountedPrice",
    order: "asc",
  },
  {
    label: "Discounted Price: High to Low",
    option: "discountedPrice",
    order: "desc",
  },
  { label: "Rating: Low to High", option: "rating", order: "asc" },
  { label: "Rating: High to Low", option: "rating", order: "desc" },
  { label: "Name: A-Z", option: "name", order: "asc" },
  { label: "Name: Z-A", option: "name", order: "desc" },
];