'use client'
import React from "react";
import styles from './products.module.css';
import Image from "next/image";
import { Product } from '../../interfaces/product';

interface Props {
  filteredProductList: Product[];
  handleNavigateToDetails: (productName: string) => void;
}

const ProductList = ({ filteredProductList, handleNavigateToDetails }: Props) => {

  return (
    <div>
      <h1>Productos</h1>
      <section className={styles.productListContainer}>
        {filteredProductList.map(product => (
          <div 
            key={product.name} 
            className={styles.productItem}
            onClick={() => handleNavigateToDetails(product.slug)}
          >
            <Image
              src={`/${product.images[0]}`}
              alt="featured product"
              width={220}
              height={220}
            />
            <h5 className={styles.productCardInfo}>{product.name}</h5>
            <h3 className={styles.productCardInfo}>${product.price}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;