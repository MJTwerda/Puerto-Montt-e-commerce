import styles from './page.module.css';
import Image from "next/image";
import { MOCK_CATEGORIES } from '../constants/products';
import FeaturedProduct from "./products/featuredProduct";

export const metadata = {
  title: 'Puerto Montt - Home',
  description: 'Featured product page'
}
// Página principal, se obtiene los productos y se muestra un producto destacado
export default async function Home() {
  // Busca el listado de productos
  const featuredProduct = await fetch(`http://${process.env.VERCEL_URL}/product-list/${MOCK_CATEGORIES.todos.value}`, {
    cache: 'no-store',
  }).then(result => result.json());

  // Establece un index random para mostrar un producto destacado en el Home
  const randomIndex = Math.floor(Math.random() * featuredProduct.length)

  return (
    <div className={styles.divFeaturedProduct}>
      <FeaturedProduct product={featuredProduct[randomIndex]} />
      <Image
        src={`${featuredProduct[randomIndex].images[0]}`}
        alt="featured product"
        width={450}
        height={450}
        placeholder='blur'
        blurDataURL={`${featuredProduct[randomIndex].images[0]}`}
      />
    </div>
  );
}
