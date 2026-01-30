import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("eversoft_cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("eversoft_cart", JSON.stringify(cartItems));
    //console.log("cart saved");
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id),
    );
  };

  const subTotal = cartItems.reduce((total, item) => {
    return total + item.discount_price * item.quantity;
  }, 0);

  const cartData = {
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    subTotal,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};
