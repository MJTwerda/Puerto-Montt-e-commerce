import styles from './about.module.css';
import ContactForm from './contactForm';
import NosostrosInfo from './aboutInfo';

export const metadata = {
  title: 'Puerto Montt - About us',
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