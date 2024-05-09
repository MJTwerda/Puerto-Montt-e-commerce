import React from "react";
import styles from '../admin.module.css';
import ProductForm from "../[productSlug]/productForm";

export const CreateProductPage = () => {

  return (
    <section>
      <h1 className={styles['admin-title']}>Creación de un nuevo producto</h1>
      <ProductForm />
    </section>
  )
};

export default CreateProductPage