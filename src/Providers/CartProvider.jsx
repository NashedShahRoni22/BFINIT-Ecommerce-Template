import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const savedCart = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState(
    savedCart ? JSON.parse(savedCart) : [],
  );

  // Save cart items to local storage
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.some((item) => item.id === product.id);
      if (!isItemInCart) {
        return [product, ...prevItems];
      }
      return [...prevItems];
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartInfo = {
    cartItems,
    setCartItems,
    handleAddToCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
}
