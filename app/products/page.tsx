'use client'
import React, { useState, useEffect, useCallback } from "react";
import styles from './products.module.css';
import CategoriesSidebar from './categoriesSidebar';
import ProductList from './productList';
import { MOCK_CATEGORIES } from '../../constants/products';
import { Product } from '../../interfaces/product';
import { useRouter } from 'next/navigation'
import { INTERNAL_API_URL } from "@/constants/commons";

const ProductListPage = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    MOCK_CATEGORIES.todos.value
  ]);
  const [ productList, setProductList ] = useState<Product[]>([]);

  /**
   * Se obtiene el listado de productos según la categoría y se setea en estado productList
   */
  const getProductsByCategory = useCallback(async () => {
    const filteredProductList = await fetch(`${INTERNAL_API_URL}/product-list/${selectedCategories}`, {
      cache: 'no-store'
    }).then(result => result.json());
    setProductList(filteredProductList)
  }, [selectedCategories]);
  useEffect(() => {
    getProductsByCategory();
  }, [getProductsByCategory]);

  // Manejador de filtrado por categorías. Si no queda categoría seleccionada se selecciona "Todos"
  const handleFilterCategories = (event: any) => {
    // Caso de agregar clickear una categoría nueva
    if (!selectedCategories.includes(event.target.value)) {
      setSelectedCategories([...selectedCategories, event.target.value])
    } else {
      // Caso que se desclickee una categoría ya seleccionada. Por defecto se selecciona "Todos"
      const filterCategories = selectedCategories.filter(category => category !== event.target.value);
      filterCategories.length ? setSelectedCategories(filterCategories) : setSelectedCategories([
        MOCK_CATEGORIES.todos.value
      ])
    }
  };

  /**
   * Antes de navegar a la pantalla de detalle se formatea el params, de manera que se eliminen
   * todos los posibles "/" en el nombre, de esta forma se evita errores 404 al intentar dirigirse
   * a una pantalla inexistente
   * @param productId - Nombre del producto sobre el cual se hizo click para ver el detalle
   */
  const handleNavigateToDetails = (productId: string) => {
    return router.push(`/products/${productId}`);
  };

  return (
    <section className={styles.productPageContainer}>
      <CategoriesSidebar
        handleFilterCategories={handleFilterCategories}
        selectedCategories={selectedCategories}
      />
      <ProductList
        filteredProductList={productList}
        handleNavigateToDetails={handleNavigateToDetails}
      />
    </section>
  )
};

export default ProductListPage;