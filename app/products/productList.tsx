'use client'
import React from "react";
import styles from './products.module.css';
import { MOCK_CATEGORIES, AVAILABLE_PRODUCTS } from '../../constants/products';
import Image from "next/image";

interface Props {
  selectedCategories: string[];
}

const ProductList = ({ selectedCategories }: Props) => {

  // Si el checkbox 'Todos' está clickeado se mostrarán todos los productos disponibles
  const filteredProductList =
    !selectedCategories.length || selectedCategories.includes(MOCK_CATEGORIES.todos.value) ? AVAILABLE_PRODUCTS :
      AVAILABLE_PRODUCTS.filter(product => selectedCategories.includes(product.category));

  return (
    <div>
      <h1>Productos</h1>
      <section className={styles.productListContainer}>
        {filteredProductList.map(product => (
          <div key={product.name} className={styles.productItem}>
            <h3>{product.name}</h3>
            <Image
              src={`/${product.image}.png`}
              alt="featured product"
              width={220}
              height={220}
            />
            <h3 className={styles.productPrice}>{product.price}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;