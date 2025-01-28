import { createContext, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [product, ...prevItems]);
  };

  const cartInfo = {
    cartItems,
    setCartItems,
    handleAddToCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
}
