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
  const productDetails = await fetch(`${INTERNAL_API_URL}/product-details/${params.productDetails}`, {
    cache: 'no-store'
  }).then(result => result.json());

  return (
    <ProductDetailCard productDetailsParam={productDetails} />
  );
};
export default ProductDetails;