'use client'
import React, { useState } from "react";
import styles from './admin.module.css';
import modalStyles from '../components/modal.module.css';
import CommonButton from '../components/button';

type Props = {
  open: boolean;
}

const LoginFormModal = (props: Props) => {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const LOGIN_FIELDS = [
    { name: 'firstName', type: 'text', placeholder: 'Ingresa tu nombre', required: true },
    { name: 'lastName', type: 'text', placeholder: 'Ingresa tu apellido', required: true },
    { name: 'email', type: 'email', placeholder: 'Ingresa tu email', required: true },
    { name: 'password', type: 'password', placeholder: 'Ingresa tu contraseña', required: true }
  ]

  const handleConfirm = () => {
    console.log('Click en Confirm')
  };

  const handleClose = () => {
    console.log('Click en Close')
  };

  const handleInputChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('Usuario se logea con:: ', formValue);
  }

  return (
    <div
      id="myModal" className={modalStyles["modal"]}
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <div className={styles["modal-content"]}>
        <h3 className={styles['title']}>Login</h3>
        <form onSubmit={handleLogin} className={styles['form-container']}>
          {LOGIN_FIELDS.map(field => (
            <input
              key={field.name}
              type={field.type}
              onChange={handleInputChange}
              required={field.required}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className={styles['common-field']}
            />
          ))}

          <div className={modalStyles['modal-actions-container']}>
            <CommonButton
              label="Confirmar"
              action={handleConfirm}
              className={`${modalStyles['action-button']} primary-button`}
            />
            <CommonButton
              label="Cancelar"
              action={handleClose}
              className={`${modalStyles['action-button']} secondary-button`}
            />
          </div>
        </form>

      </div>
    </div>
  )
};

export default LoginFormModal;