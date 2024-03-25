'use client'
import styles from "./header.module.css";

const NavigateSection = () => {
  return (
    <div className={styles.navigateSection}>
      <h4>Nosotros</h4>
      <h4>Ofertas</h4>
      <h4>Categorías</h4>
      <h4>Comprar</h4>
    </div>
  )
};

export default NavigateSection;