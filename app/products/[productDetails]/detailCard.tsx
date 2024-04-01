import React from "react";
import styles from '../products.module.css';
import Image from "next/image";
import { Product } from '../../../interfaces/product';
import DetailsActions from './detailsActions';

interface Props {
  product: Product;
}

const ProductDetailCard = ({ product }: Props) => {
  return (
    <section className={styles.detailCard}>
      <div className={styles.headerDetails}>
        <Image
          src={`/${product.image}.png`}
          alt="featured product"
          width={340}
          height={340}
        />
        <DetailsActions product={product} />
      </div>
    <p>{product.description}</p>
    </ section>
  );
};

export default ProductDetailCard;