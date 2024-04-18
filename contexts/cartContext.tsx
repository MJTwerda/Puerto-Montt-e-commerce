'use client'
import { createContext, useContext, useState } from "react";
import { Product } from '../interfaces/product';

export const CartContext = createContext<any>([] as any);

// export const useCartContext = useContext(CartContext);

const CartProvider = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [ cart, setCart ] = useState<Product[]>([]);

  // Agrega un nuevo producto al carrito
  const addProductToCart = (product: Product[]) => {
    return setCart([...cart, ...product]);
  };

  /**
   * Se ejecuta desde la pantalla "carrito" al clickear en el botón "Quitar" de un producto.
   * Disminuye en 1 la cantidad del mismo producto agregado al carrito.
   */
  const removeProductFromCart = (productToRemove: Product) => {
    const cartCopy = [...cart];
    const indexToRemove = cartCopy.findIndex(product => product.slug === productToRemove.slug);
    if (indexToRemove !== -1) {
      cartCopy.splice(indexToRemove, 1);
      setCart(cartCopy);
    }
  };

  return(
    <CartContext.Provider value={{ addProductToCart, cart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;

