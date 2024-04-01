'use client'
import React, { useState } from "react";
import styles from './products.module.css';
import CategoriesSidebar from './categoriesSidebar';
import ProductList from './productList';
import { MOCK_CATEGORIES, AVAILABLE_PRODUCTS } from '../../constants/products';
import { useRouter } from 'next/navigation'
import { replaceChar } from '../../utils/products';

const ProductListPage = () => {
  const router = useRouter();
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
  };

  // Si el checkbox 'Todos' está clickeado se mostrarán todos los productos disponibles
  const filteredProductList =
    !selectedCategories.length || selectedCategories.includes(MOCK_CATEGORIES.todos.value) ? AVAILABLE_PRODUCTS :
      AVAILABLE_PRODUCTS.filter(product => selectedCategories.includes(product.category));

  /**
   * Antes de navegar a la pantalla de detalle se formatea el params, de manera que se eliminen
   * todos los posibles "/" en el nombre, de esta forma se evita errores 404 al intentar dirigirse
   * a una pantalla inexistente
   * @param product - producto sobre el cual se hizo click para ver el detalle
   */
  const handleNavigateToDetails = (productName: string) => {
    const formattedName = replaceChar(productName, '/', '-');
    return router.push(`/products/${formattedName}`);
  };

  return (
    <section className={styles.productPageContainer}>
      <CategoriesSidebar
        handleFilterCategories={handleFilterCategories}
      />
      <ProductList 
        filteredProductList={filteredProductList} 
        handleNavigateToDetails={handleNavigateToDetails}
      />
    </section>
  )
};

export default ProductListPage;