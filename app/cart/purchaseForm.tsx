'use client'
import React from "react";
import styles from './cart.module.css';

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

  const handleManagePurchase = (event: any) => {
    event.preventDefault();
    alert('Gracias por tu compra! en breve nos pondremos en contacto');
  }

  return (
    <form className={styles.formContainer} onSubmit={handleManagePurchase}> 
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
  )
}

export default PurchaseForm