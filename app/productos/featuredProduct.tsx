import styles from '../page.module.css';
import mainPage from '../page.module.css';
import { Product } from "../../interfaces/product";
import MainPageButtons from '../buttons/mainPageButtons';

interface Props {
  product: Product;
}

// Muestra detalles del producto en la página principal
const FeaturedProduct = ({ product }: Props) => {
  return (
    <div className={styles.containerProductTitle}>
      <h1 className={styles.productTitle}>{product.name}</h1>

      <div className={mainPage.actionButtonsContainer}>
        <MainPageButtons showButtons={['comprarAhora', 'verDetalles']} />
      </div>
    </div>
  )
};

export default FeaturedProduct;