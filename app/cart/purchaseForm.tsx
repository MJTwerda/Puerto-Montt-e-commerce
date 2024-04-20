'use client'
import React from "react";
import styles from './cart.module.css';
import { useCartContext } from '../../contexts/cartContext';

const formFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Tu email',
    required: true
  },
  {
    name: 'userName',
    type: 'text',
    placeholder: 'Tu Nombre',
    required: true
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Tu Dirección',
    required: true
  }
]

const PurchaseForm = () => {

  const { cart, totalPriceCart, clearCart } = useCartContext();
  const handleManagePurchase = (event: any) => {
    event.preventDefault();
    alert('Gracias por tu compra! en breve nos pondremos en contacto');
    clearCart(); // Se limpia el carrito y localStorage
    // TODO: Implementar visualización de compras anteriores
  }

  return (
    <section className={styles['purchase-form-div-container']}>
      <h2>Resumen de compra</h2>
      <div className={styles['card-common-styles']}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p>Productos</p>
          <p>({cart.length})</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p>Envío</p>
          <p>$ 0</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p>Total</p>
          <p>$ {totalPriceCart}</p>
        </div>
      </div>

      <form onSubmit={handleManagePurchase}>
        {formFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            id={field.name}
            name={field.name}
            required
            className={styles.field}
            placeholder={field.placeholder}
          />
        ))}
        <button type="submit" className="primary-button">Confirmar compra</button>
      </form>
    </section>
  )
}

export default PurchaseForm