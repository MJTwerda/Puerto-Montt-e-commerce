'use client'
import React, { useState } from "react";
import styles from './products.module.css';
import CategoriesSidebar from './categoriesSidebar';
import ProductList from './productList';
import { MOCK_CATEGORIES } from '../../constants/products'

const ProductListPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    MOCK_CATEGORIES.todos.value
  ]);

  const handleFilterCategories = (event: any) => {
    if (!selectedCategories.includes(event.target.value)) {
      setSelectedCategories([...selectedCategories, event.target.value])
    } else {
      const filterCategories = selectedCategories.filter(category => category !== event.target.value);
      setSelectedCategories(filterCategories);
    }
  }
  return (
    <section className={styles.productPageContainer}>
      <CategoriesSidebar
        selectedCategories={selectedCategories}
        handleFilterCategories={handleFilterCategories}
      />
      <ProductList selectedCategories={selectedCategories} />
    </section>
  )
};

export default ProductListPage;