'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './updateProduct.module.css';
import { Product } from "@/interfaces/product";
import CommonButton from "@/app/components/button";
import axios from "axios";

interface Props {
  product: Product;
}

const UpdateProductForm = ({ product }: Props) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    category: '',
    description: '',
    inStock: 0,
    name: '',
    price: 0,
    slug: product?.slug,
    status: product?.status
  });
  // TODO: Agregar visualización de imágenes del producto
  const [ productImages, setProductImages ] = useState<string[]>([]);

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

  const handleFileInputChange = async(e: any) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const response = await axios.post(`http://${process.env.VERCEL_URL}/product-file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.data.ok) {
        setProductImages([response.data.fileURL]);
        // Actualización de información del producto
        await axios({
          method: 'PUT',
          url: `http://${process.env.VERCEL_URL}/product-details/${product.slug}`,
          data: {...product, images: [response.data.fileURL]}
        })
      }
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios({
      method: 'PUT',
      url: `http://${process.env.VERCEL_URL}/product-details/${product.slug}`,
      data: {...formValue, images: productImages}
    }).then(({ data }) => {
      if (data.ok) {
        //TODO: Mostrar notificación de eliminación exitosa
        alert(`${data.message}`);
      }
    })
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
          <input
            type='text'
            disabled // TODO: Por el momento de deshabilita campo para evitar categorías inexistentes
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
            minLength={3}
            maxLength={700}
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

        </div>
        {/* Image */}
        <input 
          // style={{ width: '100px', height: '50px' }}
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

export default UpdateProductForm;