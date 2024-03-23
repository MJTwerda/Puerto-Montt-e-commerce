import styles from './page.module.css';
import Image from "next/image";
import { AVAILABLE_PRODUCTS } from '../constants/products';
import ProductDetails from "./home/productDetails";
import { showFeaturedProduct } from '../utils/products';

// Página principal, se obtiene los productos y se muestra un producto destacado
export default function Home() {
  const featuredProduct = showFeaturedProduct(AVAILABLE_PRODUCTS);
  return (
    <div className={styles.divFeaturedProduct}>
      <ProductDetails product={featuredProduct} />
      <Image
        src={`/${featuredProduct.image}.png`}
        alt="tv"
        width={450}
        height={450}
      />
    </div>
  );
}
