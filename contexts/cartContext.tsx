'use client'
import { createContext, useContext, useState } from "react";
import { Product } from '../interfaces/product';

export const CartContext = createContext<any>([] as any);

// export const useCartContext = useContext(CartContext);

const CartProvider = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [ cart, setCart ] = useState<Product[]>([]);

  const addProductToCart = (product: Product[]) => {
    return setCart([...cart, ...product]);
  }

  return(
    <CartContext.Provider value={{ addProductToCart, cart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;

