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
        <section className={styles['form-container']}>
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
              action={() => router.back()}
              className={`${modalStyles['action-button']} secondary-button`}
            />
            <CommonButton
              label="Ingresar"
              action={() => loginUser({...formValue, motive: 'login'})}
              className={`${modalStyles['action-button']} primary-button`}
            />
            <CommonButton
              label="Registrarse"
              action={() => registerUser({...formValue, motive: 'register'})}
              className={`${modalStyles['action-button']} primary-button`}
            />
          </div>
        </section>

      </div>
    </div>
  )
};

export default LoginFormModal;