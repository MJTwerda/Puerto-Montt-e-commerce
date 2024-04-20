'use client'
import React, { useState } from "react";
import styles from '../products.module.css';
import { Product } from "@/interfaces/product";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { POSSIBLE_ACTIONS } from '../../../constants/products';
import { useCartContext } from '../../../contexts/cartContext';
import CommonButton from "@/app/components/button";

interface Props {
  product: Product;
}

const DetailsActions = ({ product }: Props) => {
  const [buyDetails, setBuyDetails] = useState<{ count: number, price: number }>({
    count: 1,
    price: product.price
  });

  const { addProductToCart } = useCartContext();

  /**
   * Se establece la cantidad de productos a comprar con el precio correspondiente
   * @param actionType - Indica si se debe sumar o restar la cantidad de productos
   */
  const handleChangeProductCount = (actionType: string) => {
    const count = actionType === POSSIBLE_ACTIONS.add ? buyDetails.count + 1 : buyDetails.count - 1;
    const price = count * product.price;
    setBuyDetails({ count, price });
  };

  const handleAddProductToCart = () => {
    const productList = [];
    for (let i = 1; i <= buyDetails.count; i++) {
      productList.push(product);
    }
    return addProductToCart(productList);
  }

  return (
    <div className={styles.detailsSection}>
      <h3>{product.name}</h3>
      <hr />
      <h2>${buyDetails.price}</h2>
      <div className={styles.actionsContainer}>
        <CommonButton 
          label={<GrSubtractCircle />}
          className="product-count-button"
          action={() => handleChangeProductCount(POSSIBLE_ACTIONS.subtract)}
          disabled={buyDetails.count === 1}
        />

        <h3 className={styles.productCount}>{buyDetails.count}</h3>
        
        <CommonButton 
          label={<IoIosAddCircleOutline />}
          className="product-count-button"
          action={() => handleChangeProductCount(POSSIBLE_ACTIONS.add)}
        />
      </div>
      <CommonButton 
        label="Agregar a carrito"
        className="add-to-cart-button"
        action={handleAddProductToCart}
      />
    </div>
  )
};

export default DetailsActions;