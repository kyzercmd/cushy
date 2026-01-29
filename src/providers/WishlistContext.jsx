import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedItems = localStorage.getItem("eversoft_wishlist");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("eversoft_wishlist", JSON.stringify(wishlistItems));
    console.log("wishlist saved");
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [product, ...prev];
    });
  };

  const removeFromWishlist = (product) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const isInWishlist = (product) => {
    return wishlistItems.some((item) => item.id === product.id);
  };

  const wishlistData = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={wishlistData}>
      {children}
    </WishlistContext.Provider>
  );
};
