import React from "react";
import ProductDetailCard from './detailCard';
import { INTERNAL_API_URL } from '../../../constants/commons';

export const metadata = {
  title: `Puerto Montt - Product details`,
  description: 'View product details'
};

interface Props {
  params: { productDetails: string };
}

const ProductDetails = async({ params }: Props) => {
  // TODO: Agregar mensaje en caso de no encontrar un registro
  const productDetails = await fetch(`${INTERNAL_API_URL}/product-details/${params.productDetails}`, {
    cache: 'force-cache',
      next: {
        revalidate: 1800000 // Media hora
      }
  }).then(result => result.json());

  return (
    <div>
      {productDetails ? (
        <ProductDetailCard productDetailsParam={productDetails} />
      ) : <h4>:/ No es posible visualizar el producto, intenta más tarde</h4>}
    </div>
  );
};
export default ProductDetails;