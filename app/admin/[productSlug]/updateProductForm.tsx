'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './updateProduct.module.css';
import { Product } from "@/interfaces/product";
import CommonButton from "@/app/components/button";

interface Props {
  product: Product;
}

const UpdateProductForm = ({ product }: Props) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    category: '',
    description: '',
    // images: product?.images,
    inStock: 0,
    name: '',
    price: 0,
    slug: product?.slug,
    status: product?.status
  });

  useEffect(() => {
    if (product) {
      setFormValue({
        category: product?.category,
        description: product?.description,
        // images: product?.images,
        inStock: product?.inStock,
        name: product?.name,
        price: product?.price,
        slug: product?.slug,
        status: product?.status
      })
    }
  }, [product]);

  const handleInputChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('🟢 nueva info del producto:: ', formValue);
  }

  return (
    <section className={styles['section-container']}>
      <CommonButton
        label="Volver"
        className={`back-button ${styles['back-button']}`}
        action={router.back}
      />

      <form onSubmit={handleSubmit} className={styles['form-container']}>
        {/* Name */}
        <input
          type='text'
          id='name'
          name='name'
          required
          placeholder='Nombre'
          onChange={handleInputChange}
          value={formValue['name']}
          className={styles['common-field']}
        />
        {/* Price */}
        <input
          type='number'
          id='price'
          name='price'
          required
          placeholder='Precio'
          onChange={handleInputChange}
          value={formValue['price']}
          className={styles['common-field']}
        />
        {/* In Stock */}
        <input
          type='number'
          id='inStock'
          name='inStock'
          required
          placeholder='En stock'
          onChange={handleInputChange}
          value={formValue['inStock']}
          className={styles['common-field']}
        />
        {/* Category */}
        <input
          type='text'
          id='category'
          name='category'
          required
          placeholder='Categoría'
          onChange={handleInputChange}
          value={formValue['category']}
          className={styles['common-field']}
        />
        {/* Description */}
        <textarea
          id='description'
          name='description'
          required
          placeholder='Descripción'
          onChange={handleInputChange}
          value={formValue['description']}
          className={styles['common-field']}
        />
        {/* Slug */}
        <input
          type='text'
          disabled
          placeholder='Slug'
          onChange={handleInputChange}
          value={formValue['slug']}
          className={styles['common-field']}
        />
        {/* Status */}
        <input
          type='text'
          disabled
          placeholder='Status'
          onChange={handleInputChange}
          value={formValue['status']}
          className={styles['common-field']}
        />

        <div className={styles['action-btn-container']}>
          <input type="submit" value="Enviar" className={`submit-button ${styles['action-button']}`} />
        </div>

      </form>
    </section>
  )
};

export default UpdateProductForm;