'use client'
import React from "react";
import styles from '../products.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Product } from '../../../interfaces/product';
import DetailsActions from './detailsActions';

interface Props {
  productDetailsParam: Product;
}

const ProductDetailCard = ({ productDetailsParam }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.sectionContainer}>
      <button className="back-button" onClick={router.back}>
        Volver
      </button>
      <section className={styles.detailCard}>
        <div className={styles.headerDetails}>
          <Image
            src={`/${productDetailsParam.images[0]}`}
            alt="featured product"
            width={340}
            height={340}
          />
          <DetailsActions product={productDetailsParam} />
        </div>
        <p>{productDetailsParam.description}</p>
      </ section>
    </section>
  );
};

export default ProductDetailCard;