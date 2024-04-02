import React from "react";
import PurchaseForm from './purchaseForm';

export const metadata = {
  title: 'Puerto Montt - Carrito de compras',
  description: 'Carrito con información de la compra actual'
}

const Cart = () => {
  return (
    <section>
      <h3>Tu compra</h3>
      <h5>Página en construcción. Próximamente tendremos un carrito funcionando</h5>
      <PurchaseForm />
    </section>

  );
};

export default Cart;