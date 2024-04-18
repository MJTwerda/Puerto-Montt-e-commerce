'use client'
import { createContext, useContext, useState } from "react";
import { Product } from '../interfaces/product';

export const CartContext = createContext<any>([] as any);

// export const useCartContext = useContext(CartContext);

const CartProvider = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [ cart, setCart ] = useState<Product[]>([]);
  const [ totalPriceCart, setTotalPriceCart ] = useState<number>(0);

  // Agrega un nuevo producto al carrito
  const addProductToCart = (productList: Product[]) => {
    const newPriceCart = [...cart, ...productList].reduce((acc, producto) => acc + producto.price, 0);
    setTotalPriceCart(newPriceCart);
    return setCart([...cart, ...productList]);
  };

  /**
   * Se ejecuta desde la pantalla "carrito" al clickear en el botón "Quitar" de un producto.
   * Disminuye en 1 la cantidad del mismo producto agregado al carrito.
   */
  const removeProductFromCart = (productToRemove: Product) => {
    const cartCopy = [...cart];
    const indexToRemove = cartCopy.findIndex(product => product.slug === productToRemove.slug);
    if (indexToRemove !== -1) {
      const newTotalPriceCart = totalPriceCart - cartCopy[indexToRemove].price
      cartCopy.splice(indexToRemove, 1);
      setCart(cartCopy);
      setTotalPriceCart(newTotalPriceCart)
    }
  };

  return(
    <CartContext.Provider value={{ addProductToCart, cart, removeProductFromCart, totalPriceCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;

