'use client'
import React, { useState } from "react";
import styles from '../products.module.css';
import { Product } from "@/interfaces/product";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { POSSIBLE_ACTIONS } from '../../../constants/products';

interface Props {
  product: Product;
}

const DetailsActions = ({ product }: Props) => {
  const [buyDetails, setBuyDetails] = useState<{ count: number, price: number }>({
    count: 1,
    price: product.price
  });

  /**
   * Se establece la cantidad de productos a comprar con el precio correspondiente
   * @param actionType - Indica si se debe sumar o restar la cantidad de productos
   */
  const handleChangeProductCount = (actionType: string) => {
    const count = actionType === POSSIBLE_ACTIONS.add ? buyDetails.count + 1 : buyDetails.count - 1;
    const price = count * product.price;
    setBuyDetails({ count, price });
  }

  return (
    <div className={styles.detailsSection}>
      <h3>{product.name}</h3>
      <hr />
      <h2>${buyDetails.price}</h2>
      <div className={styles.actionsContainer}>
        <button 
          className="product-count-button"
          onClick={() => handleChangeProductCount(POSSIBLE_ACTIONS.subtract)}
          disabled={buyDetails.count === 1}
        >
          <GrSubtractCircle />
        </button>
        <h3 className={styles.productCount}>{buyDetails.count}</h3>
        <button 
          className="product-count-button"
          onClick={() => handleChangeProductCount(POSSIBLE_ACTIONS.add)}
        >
          <IoIosAddCircleOutline />
        </button>
      </div>
      <button className="add-to-cart-button">Agregar a carrito</button>
    </div>
  )
};

export default DetailsActions;