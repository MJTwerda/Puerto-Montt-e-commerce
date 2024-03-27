import styles from './nosotros.module.css';
import ContactForm from './contactForm';
import NosostrosInfo from './nosotrosInfo';

const OurPage = () => {
  return (
    <div className={styles.divContainer}>
      <ContactForm />
      <NosostrosInfo />
    </div>
  )
};

export default OurPage;