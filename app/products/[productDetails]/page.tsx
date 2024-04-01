'use client'
import React, { useEffect, useState } from "react";
import styles from '../products.module.css';
import { useRouter } from 'next/navigation';
import ProductDetailCard from './detailCard';
import { AVAILABLE_PRODUCTS } from '../../../constants/products';
import { replaceChar } from '../../../utils/products';
import { Product } from '../../../interfaces/product';

interface Props {
  params: { productDetails: string };
}

const ProductDetails = ({ params }: Props) => {
  const router = useRouter();
  const [ productDetail, setProductDetail ] = useState<null | Product>(null);

  /**
   * Se decodifica el nombre del producto ya que  si tuviera espacios vendría con %20 por ejemplo
   * y se valida que el nombre del params esté en un formato seguro, incluyendo caracteres especiales
   */
  useEffect(() => {
    console.log('params.productDetails -> ', params.productDetails);
    const decodedProductName = decodeURIComponent(params.productDetails);
    console.log('decodedProductName -> ', decodedProductName);
    //  
    if (/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚüÜ.,_'-]*$/.test(decodedProductName)) {
      const matchedProduct = AVAILABLE_PRODUCTS.find(product => product.name === replaceChar(decodedProductName, '-', '/'));
      matchedProduct ? setProductDetail(matchedProduct) : null;
    }
  }, [params.productDetails])

  return (
    <section className={styles.sectionContainer}>
      <button className="back-button" onClick={router.back}>
        Volver
      </button>
      {productDetail && (
        <ProductDetailCard product={productDetail} />
      )}
    </section>
  );
};
export default ProductDetails;