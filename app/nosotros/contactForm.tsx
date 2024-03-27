'use client'
import React from "react";
import styles from './nosotros.module.css';

const ContactForm = () => {

  const handleSubmitMessage = (event: any) => {
    event.preventDefault();
    alert('Mensaje enviado! en breve nos pondremos en contacto')
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
        />

        <textarea 
          name="mensaje" 
          required 
          className={styles.field}
          placeholder="Déjanos un mensaje"
        />

        <input type="submit" value="Enviar" className="submit-button" />
      </form>
    </section>
  )
};

export default ContactForm;