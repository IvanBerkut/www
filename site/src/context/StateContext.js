import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsToCompare, setProductsToCompare] = useState([]);

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

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return (
    <StateContext.Provider
      value={{
        productsToCompare,
        addToCompare,
        removeFromCompare,
        products,
        updateProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
