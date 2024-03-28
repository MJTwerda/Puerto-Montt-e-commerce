'use client'
import React, { useState } from "react";
import styles from './products.module.css';
import CategoriesSidebar from './CategoriesSidebar';

const ProductsLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilterCategories = (event: any) => {
    if (!selectedCategories.includes(event.target.value)) {
      setSelectedCategories([...selectedCategories, event.target.value])
    } else {
      const filterCategories = selectedCategories.filter(category => category !== event.target.value);
      setSelectedCategories(filterCategories);
    }
  }

  return (
    <section className={styles.productLayoutContainer}>
      <CategoriesSidebar
        selectedCategories={selectedCategories}
        handleFilterCategories={handleFilterCategories}
      />
      {children}
    </section>
  )
};

export default ProductsLayout;