import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      return savedCart ? JSON.parse(savedCart) : []; // Ensure an array is returned
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product exists, update quantity
        return prevCart;
      } else {
        // If it's a new product, add it with quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  // Function to count total items in cart
  const getCartItemCount = () => {
    return cartItems.length;
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, getCartItemCount, updateQuantity }}
    >
      {children}
    </ShopContext.Provider>
  );
};
