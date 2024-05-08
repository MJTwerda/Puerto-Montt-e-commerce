'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './updateProduct.module.css';
import { Product } from "@/interfaces/product";
import CommonButton from "@/app/components/button";
import axios from "axios";
import { INTERNAL_API_URL } from "@/constants/commons";
import { MOCK_CATEGORIES } from "@/constants/products";

interface Props {
  product?: Product;
}

const ProductForm = ({ product }: Props) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    category: '',
    description: '',
    inStock: 0,
    name: '',
    price: 0,
    slug: product?.slug,
    status: product?.status || 'INACTIVE'
  });
  // TODO: Agregar visualización de imágenes del producto
  const [ productImages, setProductImages ] = useState<string[]>([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (product) {
      setFormValue({
        category: product?.category,
        description: product?.description,
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

  const handleFileInputChange = async (e: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const response = await axios.post(`${INTERNAL_API_URL}/product-file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.ok) {
        setProductImages([response.data.fileURL]);
        // Actualización de información del producto
        if (product) {
          await axios({
            method: 'PUT',
            url: `${INTERNAL_API_URL}/product-details/${product.slug}`,
            data: { ...product, images: [response.data.fileURL] }
          })
        }
        else {
          // Creación de un nuevo proyecto
        }
      }
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (product) {
      await axios({
        method: 'PUT',
        url: `${INTERNAL_API_URL}/product-details/${product.slug}`,
        data: { ...formValue, images: productImages }
      }).then(({ data }) => {
        if (data.ok) {
          //TODO: Mostrar notificación de eliminación exitosa
          alert(`${data.message}`);
        }
      });
      setLoading(false);
    } else {
      // Creación de un nuevo proyecto
      await axios({
        method: 'POST',
        url: `${INTERNAL_API_URL}/product-details`,
        data: { ...formValue, images: productImages, status: 'ACTIVE' }
      }).then(({ data }) => {
        if (data.ok) {
          //TODO: Mostrar notificación de eliminación exitosa
          alert(`${data.message}`);
        }
      });
      setLoading(false);
    }
  }

  return (
    <section className={styles['section-container']}>
      <CommonButton
        label="Volver"
        className={`back-button ${styles['back-button']}`}
        action={router.back}
      />

      <form onSubmit={handleSubmit} className={styles['form-container']}>
        <div className={styles['div-fields-container']}>
          {/* Name */}
          <input
            type='text'
            id='name'
            name='name'
            minLength={3}
            maxLength={150}
            required
            placeholder='Nombre'
            onChange={handleInputChange}
            value={formValue['name']}
            className={styles['common-field']}
          />
          {/* Price */}
          <input
            type='number'
            min={0}
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
            min={0}
            id='inStock'
            name='inStock'
            required
            placeholder='En stock'
            onChange={handleInputChange}
            value={formValue['inStock']}
            className={styles['common-field']}
          />
          {/* Category TODO: Cambiar por selector de categorías determinadas */}
          {/* <input
            type='text'
            disabled // TODO: Por el momento de deshabilita campo para evitar categorías inexistentes
            id='category'
            name='category'
            required
            placeholder='Categoría'
            onChange={handleInputChange}
            value={formValue['category']}
            className={styles['common-field']}
          /> */}
          <select
            id='category'
            name='category'
            required={true}
            disabled={product?.slug ? true : false}
            // placeholder='Categoría'
            onChange={handleInputChange}
            value={formValue['category']}
            className={styles['common-field']}
            style={{ width: '92%' }}
          >
            <option value='' disabled>Categoría</option>
            {Object.keys(MOCK_CATEGORIES).map(category => (
              <option
                key={MOCK_CATEGORIES[category].value}
                value={MOCK_CATEGORIES[category].value}
              >
                {MOCK_CATEGORIES[category].label}
              </option>
            ))}
          </select>
          {/* Description */}
          <textarea
            id='description'
            minLength={3}
            maxLength={700}
            name='description'
            required
            placeholder='Descripción'
            onChange={handleInputChange}
            value={formValue['description']}
            className={styles['common-field']}
          />
          {product ? (
            <>
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
            </>
          ) : null}

          <div className={styles['action-btn-container']}>
            <input 
              type="submit" 
              disabled={loading}
              value="Enviar" 
              className={`submit-button ${styles['action-button']}`} 
            />
          </div>

        </div>
        {/* Image */}
        <input
          style={{ height: '22px' }}
          type='file'
          onChange={handleFileInputChange}
        // id='images'
        // name='images'
        // value={productImage}
        />
      </form>
    </section>
  )
};

export default ProductForm;