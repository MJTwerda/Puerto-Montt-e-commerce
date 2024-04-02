'use client'
import React, { useState, useEffect } from "react";
import styles from '../products.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Product } from '../../../interfaces/product';
import DetailsActions from './detailsActions';
import { AVAILABLE_PRODUCTS } from '../../../constants/products';
import { replaceChar } from '../../../utils/products';

interface Props {
  productDetailsParam: string;
}

const ProductDetailCard = ({ productDetailsParam }: Props) => {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<null | Product>(null);

  /**
   * Se decodifica el nombre del producto ya que  si tuviera espacios vendría con %20 por ejemplo
   * y se valida que el nombre del params esté en un formato seguro, incluyendo caracteres especiales
   */
  useEffect(() => {
    const decodedProductName = decodeURIComponent(productDetailsParam);
    //  
    if (/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚüÜñÑ+°.,_'-]*$/.test(decodedProductName)) {
      const matchedProduct = AVAILABLE_PRODUCTS.find(product => product.name === replaceChar(decodedProductName, '-', '/'));
      matchedProduct ? setProductDetail(matchedProduct) : null;
    }
  }, [productDetailsParam])

  return (
    <section className={styles.sectionContainer}>
      <button className="back-button" onClick={router.back}>
        Volver
      </button>
      <section className={styles.detailCard}>
        {productDetail && (
          <>
            <div className={styles.headerDetails}>
              <Image
                src={`/${productDetail.image}.png`}
                alt="featured product"
                width={340}
                height={340}
              />
              <DetailsActions product={productDetail} />
            </div>
            <p>{productDetail.description}</p>
          </>
        )}
      </ section>
    </section>
  );
};

export default ProductDetailCard;