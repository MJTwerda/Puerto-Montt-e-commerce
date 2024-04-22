'use client'
import React, { useState } from "react";
import styles from './cart.module.css';
import { useCartContext } from '../../contexts/cartContext';
import CommonButton from "../components/button";
import { MdDeleteOutline } from "react-icons/md";
import CommonModal from '../components/commonModal';

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
  const [openModal, setopenModal] = useState(false);

  const { cart, totalPriceCart, clearCart } = useCartContext();
  const handleManagePurchase = (event: any) => {
    event.preventDefault();
    alert('Gracias por tu compra! en breve nos pondremos en contacto');
    clearCart(); // Se limpia el carrito y localStorage
    // TODO: Implementar visualización de compras anteriores
  };

  const handleOpenConfirmModal = () => {
    setopenModal(true);
  };

  const handleClearCart = () => {
    clearCart();
    setopenModal(false);
  }

  return (
    <section className={styles['purchase-form-div-container']}>
      <div className={styles['common-flex']}>
        <h2>Resumen de compra</h2>
        <CommonButton
          label={
            <div className={styles['clear-cart-icon']}>
              <MdDeleteOutline color='#FDEBE4' size={21} />
            </div>}
          className={`${styles['clear-cart-btn']} secondary-button`}
          action={handleOpenConfirmModal}
        />
      </div>
      <div className={styles['card-common-styles']}>
        <div className={styles['common-flex']}>
          <p>Productos</p>
          <p className={styles['cart-info']}>({cart.length})</p>
        </div>

        <div className={styles['common-flex']}>
          <p>Envío</p>
          <p className={styles['cart-info']}>$ 0</p>
        </div>

        <div className={styles['common-flex']}>
          <p><strong>Total</strong></p>
          <p className={styles['cart-info']}><strong>$ {totalPriceCart}</strong></p>
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

      <CommonModal
        open={openModal}
        title="¿Estás seguro de que quieres vaciar el carrito? Esta acción es irreversible"
        onClose={() => setopenModal(false)}
        onConfirm={handleClearCart}
      />
    </section>
  )
}

export default PurchaseForm