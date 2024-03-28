import styles from './nosotros.module.css';
import ContactForm from './contactForm';
import NosostrosInfo from './nosotrosInfo';

export const metadata = {
  title: 'Puerto Montt - Nosotros',
  description: 'Our contact info'
}

const OurPage = () => {
  return (
    <div className={styles.divContainer}>
      <ContactForm />
      <NosostrosInfo />
    </div>
  )
};

export default OurPage;