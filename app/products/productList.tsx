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
            onClick={() => handleNavigateToDetails(product.name)}
          >
            <h3>{product.name}</h3>
            <Image
              src={`/${product.image}.png`}
              alt="featured product"
              width={220}
              height={220}
            />
            <h3 className={styles.productPrice}>${product.price}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;