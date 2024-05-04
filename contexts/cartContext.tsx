'use client'
import { createContext, useState, useEffect, useContext } from 'react';
import { Product } from '../interfaces/product';

type CartContextType = {
  cart: Product[];
  totalPriceCart: number;
  addProductToCart: (productList: Product[]) => void;
  removeProductFromCart: (productToRemove: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  totalPriceCart: 0,
  addProductToCart: () => { },
  removeProductFromCart: () => { },
  clearCart: () => { }
});

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

const CartProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPriceCart, setTotalPriceCart] = useState<number>(0);

  // Al cargar la página del carrito se inicia el mismo con lo que haya en localStorage
  useEffect(() => {
    const initialCartLS = localStorage.getItem('cart');
    if (initialCartLS !== null) {
      const initialCart: Product[] = JSON.parse(initialCartLS);
      setCart(initialCart);
      const initialTotalPrice = initialCart.reduce((acc, product) => acc + product.price, 0);
      setTotalPriceCart(initialTotalPrice);
    }
  }, []);

  // Agrega un nuevo producto al carrito
  const addProductToCart = (productList: Product[]) => {
    const newPriceCart = [...cart, ...productList].reduce((acc, product) => acc + product.price, 0);
    setTotalPriceCart(newPriceCart);
    setCart([...cart, ...productList]);
    // Se setea el localStorage con el nuevo valor de cart
    localStorage.setItem('cart', JSON.stringify([...cart, ...productList]));
  };

  /**
   * Se ejecuta desde la pantalla "carrito" al clickear en el botón "Quitar" de un producto.
   * Disminuye en 1 la cantidad del mismo producto agregado al carrito.
   */
  const removeProductFromCart = (productToRemove: Product) => {
    const cartCopy = [...cart];
    const indexToRemove = cartCopy.findIndex(product => product.slug === productToRemove.slug);
    if (indexToRemove !== -1) {
      const newTotalPriceCart = totalPriceCart - cartCopy[indexToRemove].price;
      cartCopy.splice(indexToRemove, 1);
      setCart(cartCopy);
      setTotalPriceCart(newTotalPriceCart);
      // Se setea el localStorage con el nuevo valor de cart
      localStorage.setItem('cart', JSON.stringify(cartCopy));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setTotalPriceCart(0);
  }

  return (
    <CartContext.Provider 
      value={{ addProductToCart, cart, removeProductFromCart, totalPriceCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;