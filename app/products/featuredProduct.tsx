import styles from '../page.module.css';
import { Product } from "../../interfaces/product";
import MainPageButtons from './mainPageButtons';

interface Props {
  product: Product;
}

// Muestra detalles del producto en la página principal
const FeaturedProduct = ({ product }: Props) => {
  return (
    <div className={styles.containerProductTitle}>
      <h1 className={styles.productTitle}>{product.name}</h1>

      <div className={styles.actionButtonsContainer}>
        <MainPageButtons showButtons={['comprarAhora', 'verDetalles']} productSlug={product.slug} />
      </div>
    </div>
  )
};

export default FeaturedProduct;