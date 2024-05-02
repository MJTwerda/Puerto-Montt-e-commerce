'use client'
import React from "react";
import styles from './cart.module.css';
import { useCartContext } from '../../contexts/cartContext';
import { Product } from "@/interfaces/product";
import Image from "next/image";
import CommonButton from "../components/button";

interface ProductCart extends Product {
  count: number;
}

const PurchaseSummary = () => {
  const { cart, removeProductFromCart } = useCartContext();

  /**
   * TODO: llevar función a utils.
   * Recorre el carrito y si existen más de un producto con el mismo slug (el mismo producto)
   * Se suma 1 en la propiedad "count" y se modifica su precio según la nueva cantidad.
   */
  const cartList = cart.reduce((acc: ProductCart[], product: Product) => {
    const existingItem = acc.find(item => item.slug === product.slug);
    if (existingItem) {
      existingItem.count += 1;
      existingItem.price *= existingItem.count;
    } else {
      acc.push({ ...product, count: 1 });
    }
    return acc;
  }, []);

  return (
    <section>
      <h2>Productos en el carrito</h2>
      {cartList.map((product: ProductCart) => (
        <div key={product.slug} className={`${styles['card-common-styles']} ${styles['detail-card']}`}>
          <Image
            alt={`${product.name} image`}
            src={`${product.images[0]}`}
            height={100} width={100}
          />
          <div className={styles['description-column']}>
            <p>Name: {product.name}</p>
            <div className={styles['product-info']}>
              <CommonButton 
                label="Quitar"
                className="secondary-button"
                action={() => removeProductFromCart(product)}
              />
              <p>Count: {product.count}</p>
              <p>$ {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PurchaseSummary;