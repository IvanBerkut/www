import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsToCompare, setProductsToCompare] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCompare = (id) => {
    const foundObject = products.find((item) => item.id === id);

    if (foundObject) {
      setProductsToCompare((prevProductsToCompare) => [
        ...prevProductsToCompare,
        foundObject,
      ]);
    }
  };

  const removeFromCompare = (id) => {
    setProductsToCompare((prevProductsToCompare) =>
      prevProductsToCompare.filter((item) => item.id !== id)
    );
  };

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return (
    <StateContext.Provider
      value={{
        productsToCompare,
        addToCompare,
        removeFromCompare,
        total,
        products,
        updateTotal,
        updateProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
