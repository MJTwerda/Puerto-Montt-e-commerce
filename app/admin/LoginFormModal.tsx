'use client'
import React, { useState } from "react";
import styles from './admin.module.css';
import modalStyles from '../components/modal.module.css';
import CommonButton from '../components/button';
import { useAuthContext } from '../../contexts/authContext';
import { useRouter } from 'next/navigation';

type Props = {
  open: boolean;
}

// TODO: Limpiar código
const LoginFormModal = (props: Props) => {
  const { registerUser, loginUser } = useAuthContext();
  const [formValue, setFormValue] = useState({
    // firstName: '',
    // lastName: '',
    email: '',
    password: ''
  });
  const router = useRouter();

  const LOGIN_FIELDS = [
    // { name: 'firstName', type: 'text', placeholder: 'Ingresa tu nombre', required: true },
    // { name: 'lastName', type: 'text', placeholder: 'Ingresa tu apellido', required: true },
    { name: 'email', type: 'email', placeholder: 'Ingresa tu email', required: true },
    { name: 'password', type: 'password', placeholder: 'Ingresa tu contraseña', required: true }
  ];

  const handleInputChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  return (
    <div
      id="myModal" className={modalStyles["modal"]}
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <div className={styles["modal-content"]}>
        <h3 className={styles['title']}>Login</h3>
        <p className={styles['title']}>Debes completar todos los campos para poder continuar</p>
        <form onSubmit={(e: any) => e.preventDefault()} className={styles['form-container']}>
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
              label="Cancelar"
              action={() => router.push('/')}
              className={`${modalStyles['action-button']} secondary-button`}
            />
            <CommonButton
              label="Ingresar"
              disabled={!formValue.email || !formValue.password}
              action={() => loginUser({...formValue, motive: 'login'})}
              className={`${modalStyles['action-button']} primary-button`}
            />
            <CommonButton
              label="Crear Cuenta"
              disabled={!formValue.email || !formValue.password}
              action={() => registerUser({...formValue, motive: 'register'})}
              className={`${modalStyles['action-button']} primary-button`}
            />
          </div>
        </form>

      </div>
    </div>
  )
};

export default LoginFormModal;