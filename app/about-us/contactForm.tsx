'use client'
import React, { useState } from "react";
import styles from './about.module.css';
import axios from "axios";
import { INTERNAL_API_URL } from '../../constants/commons';

const ContactForm = () => {
  const [ formValue, setFormValue ] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const handleSubmitMessage = async(event: any) => {
    event.preventDefault();
    const sendMessage = await axios(`${INTERNAL_API_URL}/about-us`, {
      method: 'POST',
      data: formValue
    });
    console.log('🟣 sendMessage: ', sendMessage);
    alert('Mensaje enviado! en breve nos pondremos en contacto');
  }

  return (
    <section>
      <h1 className={styles.contactTitle}>Contacta con nosotros</h1>
      <form onSubmit={handleSubmitMessage} className={styles.formContainer}>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className={styles.field}
          placeholder="Tu email"
          onChange={handleInputChange}
        />

        <textarea 
          name="message" 
          required 
          className={styles.field}
          placeholder="Déjanos un mensaje"
          onChange={handleInputChange}
        />

        <input type="submit" value="Enviar" className="submit-button" />
      </form>
    </section>
  )
};

export default ContactForm;