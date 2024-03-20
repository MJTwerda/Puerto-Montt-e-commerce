import styles from '../page.module.css';
import { Product } from "../../interfaces/product";

interface Props {
  product: Product;
  showFeaturedProduct: boolean;
}

const ProductDetails = ({ product, showFeaturedProduct }: Props) => {
  return (
    <div className={styles.containerProductTitle}>
      <h1 className={styles.productTitle}>{product.name}</h1>

      <div className='action-buttons'>
        <button className={styles.actionButtons}>Comprar ahora</button>
        <button className={styles.actionButtons}>Ver detalles</button>
      </div>
    </div>
  )
};

export default ProductDetails;