import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets'; // Ensure correct path

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount > 0) {
        return { ...prev, [itemId]: newCount };
      } else {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
