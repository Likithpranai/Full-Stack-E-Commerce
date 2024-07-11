import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
// ENABLES TO PASS DATA MANUALLY WITHOUT HAVING TO PASS PROPS DOWN MANUALLY AT EVERY LEVEL

// 1. CREATE A CONTEXT
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product }; // Pass any data or function that will be provided in in the ShopContextProvider as a value. As a result, these functions and values can be accessed in any component

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* PROVIDING CONTEXT VALUE IN A PARENT COMPONENT*/}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
