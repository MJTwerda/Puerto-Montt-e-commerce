import styles from './page.module.css';
import Image from "next/image";
import { AVAILABLE_PRODUCTS } from '../constants/products';
import FeaturedProduct from "./products/featuredProduct";
import { showFeaturedProduct } from '../utils/products';

export const metadata = {
  title: 'Puerto Montt - Home',
  description: 'Featured product page'
}
// Página principal, se obtiene los productos y se muestra un producto destacado
export default function Home() {
  // Busca un producto random para mostrar en la página de inicio
  const featuredProduct = showFeaturedProduct(AVAILABLE_PRODUCTS);

  return (
    <div className={styles.divFeaturedProduct}>
      <FeaturedProduct product={featuredProduct} />
      <Image
        src={`/${featuredProduct.image}.png`}
        alt="featured product"
        width={450}
        height={450}
      />
    </div>
  );
}
