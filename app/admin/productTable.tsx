'use client'
import { Product } from "@/interfaces/product";
import React, { useEffect, useCallback, useState } from "react";
import styles from './admin.module.css';
import axios from 'axios';
import Image from 'next/image';
import { INTERNAL_API_URL } from '@/constants/commons';
import { MOCK_CATEGORIES } from '@/constants/products';
import ActionsCell from './actionsCell';
import CommonButton from "../components/button";
import { useRouter } from 'next/navigation';

type Props = {
  tableHeaders: string[];
}

const ProductTable = ({ tableHeaders }: Props) => {
  const [ productList, setProductList ] = useState<Product[]>([]);
  const router = useRouter();

  const getAllProducts = useCallback(async () => {
    await axios({
      method: 'GET',
      url: `${INTERNAL_API_URL}/product-list/${MOCK_CATEGORIES.todos.value}`
    }).then(({ data }) => {
      // TODO: Revisa cómo hacer para obtener la info actualizada al volver a esta pantalla desde update
      return setProductList(data);
    });
  }, []);
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const handleCreateNewProduct = () => {
    router.push('/admin/create-product');
  }

  return (
    <>
      <div className={styles['container-btn-div']}>
        <CommonButton
          label='Agregar nuevo producto'
          action={handleCreateNewProduct}
          className={`primary-button ${styles['new-product-btn']}`} 
        />
      </div>
      <div className={styles["table-container"]}>
        <table className={styles["product-table"]}>
          <thead>
            <tr>
              {tableHeaders.map(headerSlug => (
                <th key={headerSlug}>{headerSlug}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productList.map((product: Product) => (
              <tr key={product.slug}>
                <td>{product.slug || product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.inStock}</td>
                <td>{product.category}</td>
                <td>
                  <Image
                    src={`${product.images[0]}`}
                    alt={`${product.name} image`}
                    width={80}
                    height={80}
                    placeholder='blur'
                    blurDataURL={`${product.images[0]}`}
                  />
                </td>
                <td>{product.description}</td>
                <td><ActionsCell product={product} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default ProductTable;