import { createContext, useContext, useEffect, useState } from "react";
import Data from "../components/Assets/AllProducts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CART_KEY = "shoppingCart";

const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  const [wishlistItems, setWishlistItems] = useState([]); // Updated state name
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem(CART_KEY);
    return localData ? JSON.parse(localData) : [];
  });
  
  
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    console.log('Cart data saved:', cartItems);
  }, [cartItems]);
  
  
  
  const addToCart = (product) => {
    const existingItems = cartItems.find((item) => item.id === product.id); 
    if(existingItems){
      const updatedCart = cartItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      setCartItems(updatedCart);
    }else{
      setCartItems((prevItems) => [...prevItems, {...product, quantity: product.quantity}]);
    }
    toast.success(`${product.name} added to cart!!`)
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product])
    toast.warn('Item is added to wishlist')
  };

  const removeFromCart = (productId) => {
    const removedItem = cartItems.filter((item) => item.id !== productId);
    setCartItems((prevItems) => removedItem);
    toast.warn('Item removed from cart')
  }


  const contextValue = {
    Data,
    wishlistItems,
    cartItems,
    addToWishlist,
    addToCart,
    removeFromCart,
    setCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  const context = useContext(ShopContext);
  if(!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider')
  }
  return context;
}

export {ShopContextProvider, useShopContext};
