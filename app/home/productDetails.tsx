import styles from '../page.module.css';
import buttonStyles from '../buttons/buttons.module.css';
import { Product } from "../../interfaces/product";
import MainPageButtons from '../buttons/mainPageButtons';

interface Props {
  product: Product;
}

// Muestra detalles del producto en la página principal
const ProductDetails = ({ product }: Props) => {
  return (
    <div className={styles.containerProductTitle}>
      <h1 className={styles.productTitle}>{product.name}</h1>

      <div className={buttonStyles.actionButtonsContainer}>
        <MainPageButtons showButtons={['comprarAhora', 'verDetalles']} />
      </div>
    </div>
  )
};

export default ProductDetails;