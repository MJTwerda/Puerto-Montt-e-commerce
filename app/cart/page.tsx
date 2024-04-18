import React from "react";
import styles from './cart.module.css';
import PurchaseSummary from './purchaseSummary';
import PurchaseForm from './purchaseForm';

export const metadata = {
  title: 'Puerto Montt - Carrito de compras',
  description: 'Carrito con información de la compra actual'
}

const Cart = () => {
  return (
    <section className={styles.cartSectionContainer}>
      <PurchaseSummary />
      <PurchaseForm />
    </section>

  );
};

export default Cart;