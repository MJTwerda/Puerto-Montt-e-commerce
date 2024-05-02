'use client'
import React from "react";
import styles from '../products.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Product } from '../../../interfaces/product';
import DetailsActions from './detailsActions';
import CommonButton from "@/app/components/button";

interface Props {
  productDetailsParam: Product;
}

const ProductDetailCard = ({ productDetailsParam }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.sectionContainer}>
      <CommonButton 
        label="Volver"
        className="back-button"
        action={router.back}
      />
      <section className={styles.detailCard}>
        <div className={styles.headerDetails}>
          <Image
            src={`${productDetailsParam.images[0]}`}
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